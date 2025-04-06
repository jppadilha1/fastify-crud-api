import { fastify } from "fastify";
import db from "./db-client.js";

const server = fastify();

server.get("/", (req, res) => {
  res.send({ message: "Hello this is my Home" });
});

server.post("/employees", async (req, reply) => {
  const { email, name, salary } = req.body;

  const info = await db.create({
    data: {
      email,
      name,
      salary,
    },
  });
  console.log(email, name, salary);
  await db.disconnectClient();

  return reply.status(201).send();
});

server.get("/employees", async (req, res) => {
  const treinos = await db.read();
  await db.disconnectClient();

  return treinos;
});

/*server.put("/treinos/:id", (req, res) => {
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
}); */

server.listen({ port: 3333 }, (err, adress) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
