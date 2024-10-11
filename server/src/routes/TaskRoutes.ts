import { Router } from 'express';
import { CreateTask, GetTasks, GetUserTasks, UpdateTaskStatus } from '../controllers/TaskController';

const router = Router();

router.get("/", GetTasks);
router.post("/", CreateTask);
router.patch("/:taskId/status", UpdateTaskStatus);
router.get("/user/:userId", GetUserTasks);

export default router;