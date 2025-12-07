import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 100,
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.json({ message: "Hydra Panel API Running" });
});

app.listen(3000, () => console.log("Panel Running on port 3000"));
