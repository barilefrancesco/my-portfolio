import { env } from "~/env";
import { PrismaClient } from "@prisma/client";


declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: env.NODE_ENV === "development" ? ["error"] : ["error"],
  });

if (env.NODE_ENV !== "production") {
  global.prisma = prisma;
}