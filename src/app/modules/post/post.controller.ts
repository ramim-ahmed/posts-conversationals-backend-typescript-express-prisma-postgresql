import { Request, Response } from 'express';
import { PostService } from './post.service';
import httpStatus from 'http-status';

const createPost = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await PostService.createPost(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'post is created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'post is created failed!',
      error,
    });
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getAllPosts();
    res.status(httpStatus.OK).json({
      success: true,
      message: 'posts is fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: 'posts is fetched failed!',
      error,
    });
  }
};

export const PostController = { createPost, getAllPosts };
