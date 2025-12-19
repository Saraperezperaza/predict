const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/energia_predict";

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("[PREDICT] Conectado a MongoDB");
  } catch (err) {
    console.error("[PREDICT] Error conectando a MongoDB:", err);
    process.exit(1);
  }
}

module.exports = { connectDB, mongoose };
