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

server.listen(3000, () => {
  process.stdout.write("listening on port 3000...\n");
});