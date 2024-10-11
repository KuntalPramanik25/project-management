import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GetTasks = async (req: Request, res: Response): Promise<void> => {
    const { projectId } = req.query;
    try {
        const tasks = await prisma.task.findMany({
            where: {
                projectId: Number(projectId)
            },
            include: {
                author: true,
                assignee: true,
                comments: true,
                attachments: true,
            }
        });
        res.json(tasks);
    }
    catch (error: any) {
        res.status(500).json({ message: `500 :: Error retreiving Tasks : ${error.message}` });
    }
}

export const CreateTask = async (req: Request, res: Response): Promise<void> => {
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

export const UpdateTaskStatus = async (req: Request, res: Response): Promise<void> => {
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

export const GetUserTasks = async (req: Request,res: Response): Promise<void> => {
    const { userId } = req.params;
    try {
        const tasks = await prisma.task.findMany({
            where: {
                OR: [
                    { authorUserId: Number(userId) },
                    { assignedUserId: Number(userId) },
                ],
            },
            include: {
                author: true,
                assignee: true,
            },
        });
        res.json(tasks);
    }
    catch (error: any) {
        res.status(500).json({ message: `Error retrieving User's Tasks: ${error.message}` });
    }
};