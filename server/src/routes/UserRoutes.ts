import { Router } from 'express';
import { GetUsers } from '../controllers/UserController';

const router = Router();

router.get("/", GetUsers);

export default router;