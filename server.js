import { fastify } from "fastify";
import db from "./infra/db-client.js";

const server = fastify();

server.get("/", (req, res) => {
  res.status(200).send({ message: "Hello this is my Home" });
});

server.post("/products", async (req, reply) => {
  const { name, desc, price } = req.body;

  await db.create({
    data: {
      name,
      desc,
      price,
    },
  });

  return reply.status(201).send("Created");
});

server.get("/products", async (req, reply) => {
  const id = parseInt(req.query.id);
  const products = await db.read(id);

  return reply.status(200).send(products);
});

server.put("/products/:id", async (req, reply) => {
  const id = parseInt(req.params.id);
  const { name, desc, price } = req.body;

  await db.update(id, {
    name,
    desc,
    price,
  });

  return reply.status(204).send("request successful return any content");
});

server.delete("/products/:id", async (req, reply) => {
  const id = parseInt(req.params.id);
  await db.deleteProduct(id);

  return reply.status(200).send("deleted successfully");
});

server.listen({ port: 3333 }, (err, adress) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
