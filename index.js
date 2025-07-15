require("dotenv").config();
const app = require("./app");
const { connectDB, disconnectDB } = require("./database");

const unhandledErrorEvents = ["uncaughtException", "unhandledRejection"];

unhandledErrorEvents.forEach((event) => {
  process.on(event, async (error) => {
    console.log(`${event} occurred: `, error);
    await disconnectDB();
    process.exit(1);
  });
});

const signalEvents = ["SIGINT", "SIGTERM"];

signalEvents.forEach((event) => {
  process.on(event, async () => {
    await disconnectDB();
    console.log(`App termination (${event})`);
    process.exit(0);
  });
});

const PORT = process.env.PORT || 5000;

(async (port) => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server started and running on http://localhost:${port}`);
  });
})(PORT);
