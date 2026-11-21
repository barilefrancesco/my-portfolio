import { env } from "~/env";
import { PrismaClient } from '../../../prisma/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

declare global {
   
  var prisma: PrismaClient | undefined;
}

const adapter = new PrismaPg({ 
  connectionString: process.env.POSTGRES_URL 
});

export const prisma =
  global.prisma ?? new PrismaClient({ adapter });

if (env.NODE_ENV !== "production") {
  global.prisma = prisma;
}