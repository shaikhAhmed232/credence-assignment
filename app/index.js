const express = require("express");
const { httpStatusCode } = require("./constants");
const { NotFoundError, BaseError, BadRequestError } = require("./errors");
const router = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api", router);

app.use((error, req, res, next) => {
  const response = {};
  if (error instanceof BaseError) {
    response.statusCode = error.statusCode;
    response.message = error.message;
    if (error instanceof BadRequestError) {
      response.data = error.data;
    }
  } else {
    console.log(`Internal Server error`, error);
    response.statusCode = httpStatusCode.INTERNAL_SERVER_ERROR;
    response.message = "Something went wrong";
  }
  res.status(response.statusCode).json(response);
});

app.use("/", (req, res) => {
  const response = new NotFoundError(`${req.url} not found`);
  res.status(httpStatusCode.NOT_FOUND).json({
    statusCode: response.statusCode,
    message: response.message,
    name: response.message,
  });
});

module.exports = app;
