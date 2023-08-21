import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const todolist = await prisma.todoList.update({
    where: { id: 1 },
    data: {
      todos: {
        create: {
          title: "Buy Milk",
          content: "Buy Milk from the store",
        },
      },
    },
  });
  console.log(todolist);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
