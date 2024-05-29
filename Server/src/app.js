import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// route import
import userRoute from "./routes/user.route.js";

// route decleration
app.use("/api/v1/users", userRoute);
// http://localhost/api/v1/users and go now userRouter ->  /register
export { app };
