import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GetUsers = async (req: Request, res: Response) : Promise<void> => {

    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } 
    catch (error: any) {
        res.status(500).json({ message: `500 :: Error retreiving Users : ${error.message}` });
    }
}

export const CreateTask = async (req: Request, res: Response) : Promise<void> => {
    const { title, description, status, priority, tags, startDate, dueDate, points, projectId, authorUserId, assignedUserId } = req.body;
    try {
        const newTask = await prisma.task.create({
            data: { title, description, status, priority, tags, startDate, dueDate, points, projectId, authorUserId, assignedUserId }
        });
        res.status(201).json(newTask);
    } 
    catch (error: any) {
        res.status(500).json({ message: `500 :: Error in Task Creation. : ${error.message}` });
    }
}

export const UpdateTaskStatus = async (req: Request, res: Response) : Promise<void> => {
    const { taskId } = req.params;
    const { status } = req.body
    try {
        const updatedTask = await prisma.task.update({
            where: { 
                id: Number(taskId) 
            },
            data: {
                status: status,
            }
        });
        res.json(updatedTask);
    } 
    catch (error: any) {
        res.status(500).json({ message: `500 :: Error Updatting the Task. : ${error.message}` });
    }
}