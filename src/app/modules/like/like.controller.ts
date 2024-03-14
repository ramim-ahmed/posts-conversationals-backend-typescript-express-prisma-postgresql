import httpStatus from 'http-status';
import { LikeServie } from './like.service';
import { Request, Response } from 'express';

const createLike = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await LikeServie.createLike(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'like is added successfully!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'like is created failed!',
      error,
    });
  }
};

export const LikeController = { createLike };
