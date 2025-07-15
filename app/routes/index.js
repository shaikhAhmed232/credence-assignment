const router = require("express").Router();
const { readdirSync } = require("fs");
const { join, extname, basename } = require("path");

const currentDir = __dirname;
const fileName = __filename;

readdirSync(currentDir)
  .filter((file) => file !== basename(fileName) && extname(file) === ".js")
  .forEach((file) => {
    const fileName = basename(file, ".js");
    const route = `/${fileName}`;
    const currentRouter = require(`./${file}`);
    router.use(route, currentRouter);
  });

module.exports = router;
