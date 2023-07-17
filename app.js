import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routes imports
import authRoutes from "./routes/outh.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();
// Midlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;
