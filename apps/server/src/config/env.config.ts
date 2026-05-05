import dotenv from "dotenv";
import { z } from "zod";
import path from "path"

dotenv.config({
    path: path.resolve(process.cwd(), "../../.env"),
});

const envSchema = z.object({
    SERVER_PORT: z.string().default("8000").transform(Number),
    JWT_SECRET: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    NEXT_PUBLIC_API_URL: z.string().optional()
});

export const env = envSchema.parse(process.env);