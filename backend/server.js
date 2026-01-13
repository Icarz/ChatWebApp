import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

import connectToMongoDb from "./db/connectToDatabase.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server is running !!");
});

// *** middleware *** //
app.use(express.json()); // to parse data from json payloads (from the body)
app.use(cookieParser()); // to parse cookies from the request
// *** routes *** //
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectToMongoDb(), console.log(`server running on ${PORT}`);
});
