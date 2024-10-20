"use server";
import { z } from "zod";
import { prisma } from "~/server/db/client";

export interface Post {
  id: number;
  title: string;
  subtitle: string | null;
  content: string;
  coverImage: string | null;
}

export interface PostWithCategory {
  id: number;
  title: string;
  subtitle: string | null;
  content: string;
  coverImage: string | null;
  categories: {
    category: {
      id: number;
      name: string;
    };
  }[];
}

const listPostSchema = z.object({
    category: z.string().optional(),    
});

export const listPost = async (data: z.infer<typeof listPostSchema>): Promise<PostWithCategory[]> => {
  const parsedData = listPostSchema.safeParse(data);
  if (!parsedData.success) {
      throw new Error("Invalid data");
  }

  const posts = await prisma.post.findMany({
    where: {
      categories: {
        some: {
          category: {
            name: data.category,
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


export const getPost = async (id: number): Promise<Post> => {
  const post = await prisma.post.findUnique({
    where: {
      id,
    }
  });

  if (!post) {
    throw new Error("Post not found");
  }

  return post;
};