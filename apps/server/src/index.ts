import express from "express";
import "dotenv/config";
import cors from "cors";
import mainRouter from "./routes";

const app = express();
const PORT = process.env.SERVER_PORT;

const ALLOWED_ORIGINS = [
    "http://localhost:3000"
]

app.use(express.json());

app.use(
    cors({
        origin: ALLOWED_ORIGINS,
        credentials: true
    }),
);

app.use("/api/v1", mainRouter);

app.listen(PORT, () => {
    console.log("Server is running on PORT: 8000")
})