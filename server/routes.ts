import express from "express";

const {
  Request,
  Response,
  Router,
} = express;

const router: Router = express.Router();

router.use((
  request: express.Request,
  reponse: express.Response,
  next: express.NextFunction,
): void => {
  process.stdout.write(`${request.method}: ${request.path}\n`);

  next();
});

router.use("users/:uuid", (request: Request, response: Response): void => {
  process.stdout.write(request.params);
});

router.post("users", (request: Request, response: Response): void => {
  // empty
});

router.get("users/:uuid", (request: Request, response: Response): void => {
  // empty
});

router.put("users/:uuid", (request: Request, response: Response): void => {
  // empty
});

router.delete("users/:uuid", (request: Request, response: Response): void => {
  // empty
});

export = router;
