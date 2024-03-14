import { Request, Response } from 'express';
import { UserService } from './user.service';
import httpStatus from 'http-status';

const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await UserService.createUser(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'user is created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'user is created failed!',
      error,
    });
  }
};

export const UserController = { createUser };
