import express from 'express';
import { UserController } from './user.controller';
const router = express.Router();
router.get('/', UserController.getAllUsers);
router.post('/create-user', UserController.createUser);
router.get('/:id', UserController.getUser);
router.patch('/:id', UserController.updatedUser);

export const UserRoutes = router;
