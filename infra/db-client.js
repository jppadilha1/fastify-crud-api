import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function create(data) {
  return await prisma.products.create(data).catch(catchErr);
}

async function read(id = null) {
  if (id) {
    return await prisma.products
      .findUnique({
        where: { id: id },
      })
      .catch(catchErr);
  }

  return await prisma.products.findMany().catch(catchErr);
}

async function update(id, data) {
  await prisma.products
    .update({
      where: { id: id },
      data: data,
    })
    .catch(catchErr);
}

async function deleteProduct(id) {
  await prisma.products
    .delete({
      where: { id: id },
    })
    .catch(catchErr);
}

function catchErr(err) {
  console.error(err);
  return;
}

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

export default {
  create,
  read,
  update,
  deleteProduct,
};
