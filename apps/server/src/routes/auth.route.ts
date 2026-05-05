import { Router } from "express";
import { healthController } from "../controller/user-controller/health.controller";

const authRouter = Router();

authRouter.get("/health", healthController);
authRouter.post("/signin");

export default authRouter;