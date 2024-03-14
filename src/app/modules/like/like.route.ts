import express from 'express';
import { LikeController } from './like.controller';
const router = express.Router();

router.post('/create-like', LikeController.createLike);
export const LikeRoutes = router;
