import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

server.get("/", (req, res) => {
  res.send({ message: "Hello this is my Home" });
});

const database = new DatabaseMemory();

server.post("/treinos", (req, reply) => {
  const { name, desc, pr } = req.body;

  database.create({
    name,
    desc,
    pr,
  });

  return reply.status(201).send();
});

server.get("/treinos", (req, res) => {
  const treinos = database.list();

  return treinos;
});

server.put("/treinos/:id", (req, res) => {
  const id = req.params.id;
  const { name, desc, pr } = req.body;

  database.update(id, {
    name,
    desc,
    pr,
  });

  return res
    .status(204)
    .send("204, request successful, but not return any content");
});

server.delete("/treinos/:id", (req, res) => {
  database.delete(req.params.id);
  console.log(req.params.id);

  return res.status(200).send("deleted successfully");
});

server.listen({ port: 3333 }, (err, adress) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
