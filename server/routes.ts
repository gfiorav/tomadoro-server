import express from "express";

const router: express.Router = express.Router();

router.use((
  request: express.Request,
  reponse: express.Response,
  next: express.NextFunction,
): void => {
  process.stdout.write(`${request.method}: ${request.path}\n`);

  next();
});

router.post("users", (request: express.Request, response: express.Response): void => {
  // TODO: Implement create User
});

router.use("users/:uuid", (request: express.Request, response: express.Response): void => {
  // TODO: Implement User loader
});

router.get("users/:uuid", (request: express.Request, response: express.Response): void => {
  // TODO: Implement show User
});

router.put("users/:uuid", (request: express.Request, response: express.Response): void => {
  // TODO: Implement update User
});

router.delete("users/:uuid", (request: express.Request, response: express.Response): void => {
  // TODO: Implement delete User
});

export = router;
