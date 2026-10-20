import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL! }),
});

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "demo@jobtrail.dev" },
    update: {},
    create: { email: "demo@jobtrail.dev", name: "Usuario demo" },
  });

  await prisma.application.createMany({
    data: [
      { userId: user.id, company: "Acme", position: "Junior Full-stack", source: "LINKEDIN", status: "APPLIED" },
      { userId: user.id, company: "Globex", position: "Frontend Trainee", source: "INFOJOBS", status: "INTERVIEW" },
      { userId: user.id, company: "Initech", position: "Backend Junior", source: "COMPANY_SITE", status: "SAVED" },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
