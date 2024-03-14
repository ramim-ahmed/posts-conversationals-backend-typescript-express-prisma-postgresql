import { Request, Response } from 'express';
import { UserService } from './user.service';
import httpStatus from 'http-status';
// create new users
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
// get all users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsers();
    res.status(httpStatus.OK).json({
      success: true,
      message: 'users is fetched successfully!',
      meta: {
        total: result.meta.total,
      },
      data: result.data,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'users is fetched failed!',
      error,
    });
  }
};

// get user
const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserService.getUser(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'user is fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'user is fetched failed!',
      error,
    });
  }
};

// updated user
const updatedUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await UserService.updateUser(id, data);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'user is updated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'user is updated failed!',
      error,
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getUser,
  updatedUser,
};
