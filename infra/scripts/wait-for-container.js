import { exec } from "node:child_process";

function check() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(err, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      check();
      return;
    }

    if (err) {
      console.error(err);
      return;
    }

    console.log("\n 👍 Postgres está aceitando conexões.");
  }
}

console.log("⏳ Aguardando o Postgres");
check();
