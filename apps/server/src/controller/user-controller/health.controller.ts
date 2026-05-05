import type { Request, Response } from "express";

export const healthController = async (req: Request, res: Response) => {
    res.status(200).json({
        status: true,
        message: "server health is good"
    });
};