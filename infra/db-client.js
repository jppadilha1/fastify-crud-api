import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function create(data) {
  return await prisma.employee.create(data);
}

async function read() {
  return await prisma.employee.findMany();
}

async function update(id, data) {
  await prisma.employee.update({
    where: { id: id },
    data: data,
  });
}

async function disconnectClient() {
  await prisma.$disconnect();
}

export default {
  create,
  read,
  update,
  disconnectClient,
};
