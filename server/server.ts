import express from "express";
import routes from "./routes";

const server: express.Application = express();

server.use(routes);

const port: number = 3000;
server.listen(port, () => {
  process.stdout.write(`listening on port ${port}...\n`);
});
