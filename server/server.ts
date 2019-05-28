import express from "express";

import db from "./db";
import routes from "./routes";

const server: express.Application = express();

server.use(routes);

db.sync()
  .then(() => {
    const port: number = 3000;
    server.listen(port, () => {
      process.stdout.write(`listening on port ${port}...\n`);
    });
  })
  .catch((error) => (process.stderr.write(error)));
