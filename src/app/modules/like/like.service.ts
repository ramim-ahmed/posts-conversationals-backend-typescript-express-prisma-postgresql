import { Like, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const createLike = async (data: Like): Promise<Like> => {
  const result = await prisma.like.create({ data });
  return result;
};

export const LikeServie = { createLike };
