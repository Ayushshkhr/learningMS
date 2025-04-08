import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import courseRoutes from './routes/courseRoutes.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/courses', courseRoutes);

// Example default route
app.get("/", (req, res) => {
  res.send("LMS Backend is running");
});

// Connect DB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch(err => console.log(err));
