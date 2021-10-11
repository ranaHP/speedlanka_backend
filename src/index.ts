import "reflect-metadata";
import { connect } from "./config/typeorm";
import { startServer } from "./app";

async function main() {
  connect();
  const app = await startServer();
  const port = 8080;
  app.listen(port);
  console.log("Server on port " + port);
}

main();
