import express from "express";

const server: express.Application = express();

const loggerMiddleware = (
  request: express.Request,
  reponse: express.Response,
  next: express.NextFunction,
) => {
  process.stdout.write(`${request.method}: ${request.path}\n`);

  next();
};

server.use(loggerMiddleware);

server.get("/", (request: express.Request, response: express.Response) => {
  response.send("welcome to the tomadoro service!");
});

const port: number = 3000;
server.listen(port, () => {
  process.stdout.write(`listening on port ${port}...\n`);
});
