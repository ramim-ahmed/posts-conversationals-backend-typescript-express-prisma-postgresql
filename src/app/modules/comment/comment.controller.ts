import httpStatus from 'http-status';
import { CommentService } from './comment.service';
import { Request, Response } from 'express';

const createComment = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await CommentService.createComment(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'comment is created to post successfully!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'comment is added to post failed!',
      error,
    });
  }
};

export const CommentController = { createComment };
