const mongoose = require("mongoose");
const MAX_TRIAL = 3;

const dbURI = process.env.DB_URL || `mongodb://localhost:27017/your-db-name`;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

const disconnectDB = async (tried = 0) => {
  try {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  } catch (error) {
    console.log("Error when disconnecting");
    if (tried < MAX_TRIAL) {
      disconnectDB(++tried);
    }
  }
};

module.exports = { connectDB, disconnectDB, mongoose };
