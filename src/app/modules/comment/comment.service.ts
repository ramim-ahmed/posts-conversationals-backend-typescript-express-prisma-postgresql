import { Comment, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const createComment = async (data: Comment): Promise<Comment> => {
  const result = await prisma.comment.create({ data });
  return result;
};
export const CommentService = { createComment };
