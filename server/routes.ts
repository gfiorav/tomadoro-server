import express from "express";

const router: express.Router = Router();

router.use((
  request: express.Request,
  reponse: express.Response,
  next: NextFunction,
): void => {
  process.stdout.write(`${request.method}: ${request.path}\n`);

  next();
});

router.use("users/:uuid", (request: express.Request, response: express.Response): void => {
  // TODO: Implement User loader
});

router.post("users", (request: express.Request, response: express.Response): void => {
  // TODO: Implement create User
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
