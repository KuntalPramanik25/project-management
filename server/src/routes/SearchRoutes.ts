import { Router } from 'express';
import { Search } from '../controllers/SearchController';

const router = Router();

router.get("/", Search);

export default router;