import express from 'express';
import { CommentController } from './comment.controller';
const router = express.Router();

router.post('/create-comment', CommentController.createComment);

export const CommentRoutes = router;
