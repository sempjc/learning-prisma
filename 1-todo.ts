import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const todoList = await prisma.todoList.create({
    data: {
      name: "My Todo List",
      userId: 1,
    },
  });
  console.log(todoList);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
