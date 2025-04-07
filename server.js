import { fastify } from "fastify";
import db from "./infra/db-client.js";

const server = fastify();

server.get("/", (req, res) => {
  res.send({ message: "Hello this is my Home" });
});

server.post("/employees", async (req, reply) => {
  const { email, name, salary } = req.body;

  await db.create({
    data: {
      email,
      name,
      salary,
    },
  });
  await db.disconnectClient();

  return reply.status(201).send();
});

server.get("/employees", async (req, res) => {
  const treinos = await db.read();
  await db.disconnectClient();

  return treinos;
});

server.put("/employees/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { email, name, salary } = req.body;

  await db.update(id, {
    email,
    name,
    salary,
  });

  return res
    .status(204)
    .send("204, request successful, but not return any content");
});
/*
server.delete("/treinos/:id", (req, res) => {
  database.delete(req.params.id);
  console.log(req.params.id);

  return res.status(200).send("deleted successfully");
}); */

server.listen({ port: 3333 }, (err, adress) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
