const { Movie } = require("../models");
const { NotFoundError } = require("../errors");

// Create
exports.createMovie = async (req, res, next) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.status(201).json(movie);
};

// Read all
exports.getAllMovies = async (req, res, next) => {
  let { limit, page } = req.query;
  limit = parseInt(limit);
  limit = !isNaN(limit) ? limit : 10;
  page = parseInt(page);
  page = !isNaN(page) ? page : 1;
  const offset = limit * (page - 1);
  const moviesCount = await Movie.countDocuments();
  const movies = await Movie.find()
    .sort({ updatedAt: -1 })
    .limit(limit)
    .skip(offset);
  res.json({
    currentPage: page,
    totalCount: moviesCount,
    data: movies,
  });
};

// Read single
exports.getMovieById = async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    const error = new NotFoundError(`Movie with given id not found`);
    next(error);
    return;
  }
  res.json(movie);
};

// Update
exports.updateMovie = async (req, res, next) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
  });
  if (!movie) {
    const error = new NotFoundError(`Movie with given id not found`);
    next(error);
    return;
  }
  res.json(movie);
};

// Delete
exports.deleteMovie = async (req, res, next) => {
  const movie = await Movie.findByIdAndDelete(req.params.id);
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json({ message: "Movie deleted successfully" });
};
