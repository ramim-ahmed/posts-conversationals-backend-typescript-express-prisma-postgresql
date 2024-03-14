import { PrismaClient, User } from '@prisma/client';
import { IGenericResponse } from '../../../interface/common';
const prisma = new PrismaClient();

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });
  return result;
};

const getAllUsers = async (): Promise<IGenericResponse<Partial<User>[]>> => {
  const result = await prisma.user.findMany();
  const totalUsers = await prisma.user.count();
  return {
    meta: {
      total: totalUsers,
    },
    data: result,
  };
};

const getUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateUser = async (id: string, data: User) => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

export const UserService = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
};
