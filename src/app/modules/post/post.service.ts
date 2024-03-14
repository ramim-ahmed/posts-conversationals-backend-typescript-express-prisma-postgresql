import { Post, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({ data });
  return result;
};

const getAllPosts = async (): Promise<Partial<Post>[]> => {
  const result = await prisma.post.findMany({
    select: {
      content: true,
      user: {
        select: {
          name: true,
          email: true,
          role: true,
        },
      },
    },
  });
  return result;
};

export const PostService = {
  createPost,
  getAllPosts,
};
