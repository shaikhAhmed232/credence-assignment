const { Movie } = require("./app/models");
const { connectDB, disconnectDB } = require("./database");
const { faker } = require("@faker-js/faker");
const generateMovie = () => ({
  name: faker.lorem.words(3),
  img: faker.image.url({ height: 300, width: 450 }),
  summary: faker.lorem.paragraphs(2),
});

const insertMovies = async () => {
  try {
    const movies = Array.from({ length: 1000 }, generateMovie);
    await Movie.insertMany(movies);
    console.log("✅ 1000 movies inserted successfully");
  } catch (error) {
    console.error("❌ Error inserting movies:", error);
  } finally {
    console.log("MongoDB disconnected");
  }
};

insertMovies();
