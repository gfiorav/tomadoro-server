import express from "express";

const {
  Request,
  Response,
  Router,
} = express;

const router: Router = Router();

router.use((
  request: Request,
  reponse: Response,
  next: NextFunction,
): void => {
  process.stdout.write(`${request.method}: ${request.path}\n`);

  next();
});

router.use("users/:uuid", (request: Request, response: Response): void => {
  // TODO: Implement User loader
});

router.post("users", (request: Request, response: Response): void => {
  // TODO: Implement create User
});

router.get("users/:uuid", (request: Request, response: Response): void => {
  // TODO: Implement show User
});

router.put("users/:uuid", (request: Request, response: Response): void => {
  // TODO: Implement update User
});

router.delete("users/:uuid", (request: Request, response: Response): void => {
  // TODO: Implement delete User
});

export = router;
