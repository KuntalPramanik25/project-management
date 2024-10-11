import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GetProjects = async (req: Request, res: Response) : Promise<void> => {
    try {
        const projects = await prisma.project.findMany();
        res.json(projects);
    } 
    catch (error: any) {
        res.status(500).json({ message: `500 :: Error retreiving Projects : ${error.message}` });
    }
}

export const CreateProject = async (req: Request, res: Response) : Promise<void> => {
    const { name, description, startDate, endDate } = req.body;
    try {
        const newProject = await prisma.project.create({
            data: { name, description, startDate, endDate }
        });
        res.status(201).json(newProject);
    } 
    catch (error: any) {
        res.status(500).json({ message: `500 :: Error in Project Creation : ${error.message}` });
    }
}