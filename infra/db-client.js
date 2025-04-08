import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function create(data) {
  return await prisma.products.create(data);
}

async function read() {
  return await prisma.products.findMany();
}

async function update(id, data) {
  await prisma.products.update({
    where: { id: id },
    data: data,
  });
}

async function deleteProduct(id) {
  await prisma.products.delete({
    where: { id: id },
  });
}

async function disconnectClient() {
  await prisma.$disconnect();
}

export default {
  create,
  read,
  update,
  deleteProduct,
  disconnectClient,
};
