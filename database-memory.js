import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  #videos = new Map();

  list() {
    return Array.from(this.#videos.entries()).map((arrayKeyValue) => {
      const id = arrayKeyValue[0];
      const data = arrayKeyValue[1];

      return {
        id,
        ...data,
      };
    });
  }

  create(treino) {
    const idTreino = randomUUID();

    this.#videos.set(idTreino, treino);
  }

  update(id, newtreino) {
    this.#videos.set(id, newtreino);
  }

  delete(id) {
    this.#videos.delete(id);
  }
}
