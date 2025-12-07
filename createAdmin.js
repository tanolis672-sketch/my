import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const password = await bcrypt.hash("admin123", 10);
  await User.create({ username: "admin", password });
  console.log("Admin Created: admin/admin123");
  process.exit();
});
