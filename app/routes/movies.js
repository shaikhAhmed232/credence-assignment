const { tryCatch } = require("../utils");
const {
  getAllMovies,
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies");
const { requestBodyValidator } = require("../middlewares");
const { validations } = require("../utils");

const router = require("express").Router();

router
  .route("/")
  .get(tryCatch(getAllMovies))
  .post(
    requestBodyValidator(validations.movieValidations),
    tryCatch(createMovie)
  );

router
  .route("/:id")
  .get(tryCatch(getMovieById))
  .put(
    requestBodyValidator(validations.movieValidations),
    tryCatch(updateMovie)
  )
  .delete(tryCatch(deleteMovie));

module.exports = router;
