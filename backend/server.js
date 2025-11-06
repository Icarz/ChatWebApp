import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectToMongoDb from "./db/connectToDatabase.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server is running !!");
});

// *** middleware *** //
app.use(express.json()); // to parse data from json payloads (from the body)
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDb(), console.log(`server running on ${PORT}`);
});
