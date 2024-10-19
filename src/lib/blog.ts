"use server";
import { prisma } from "~/server/db/client";


export interface PostWithCategory {
  id: number;
  title: string;
  content: string;
  categories: {
    category: {
      id: number;
      name: string;
    };
  }[];
}


export const listPost = async ({ category }: { category?: string }): Promise<PostWithCategory[]> => {
  const posts = await prisma.post.findMany({
    where: {
      categories: {
        some: {
          category: {
            name: category,
          },
        },
      },
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
    orderBy: {
      published: "desc",
    },
  });

  return posts;
};
