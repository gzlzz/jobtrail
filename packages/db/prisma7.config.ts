import path from "node:path";
import { config } from "dotenv";
import { defineConfig } from "prisma/config";

// Un único .env en la raíz del monorepo.
config({ path: path.resolve(__dirname, "../../.env") });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
