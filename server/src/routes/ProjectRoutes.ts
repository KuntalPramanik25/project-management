import { Router } from 'express';
import { CreateProject, GetProjects } from '../controllers/ProjectController';

const router = Router();

router.get("/", GetProjects);
router.post("/", CreateProject);

export default router;