import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(
    "MONGODB_URI environment variable is required. Ensure you loaded .env (import \"dotenv/config\") or provided the env to the container/Pod."
  );
}

export async function connectDB() {
  try {
    await mongoose.connect(uri, {
      // Additional options for better connection handling
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}
