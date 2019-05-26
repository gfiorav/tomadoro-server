import express from "express";

const server: express.Application = express();

server.get("/", (request: express.Request, response: express.Response) => {
  response.send("welcome to the tomadoro service!");
});

server.listen(3000, () => {
  process.stdout.write("listening on port 3000...");
});
