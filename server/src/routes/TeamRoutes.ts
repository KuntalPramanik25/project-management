import { Router } from "express";

import { GetTeams } from "../controllers/TeamController";

const router = Router();

router.get("/", GetTeams);

export default router;