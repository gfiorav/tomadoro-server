import express from "express";

import Session from "./models/session";
import User from "./models/user";

const router: express.Router = express.Router();

router.use((
  request: express.Request,
  reponse: express.Response,
  next: express.NextFunction,
): void => {
  process.stdout.write(`${request.method}: ${request.path}\n`);

  next();
});

router.use(async (
  request: express.Request,
  reponse: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  const { user_uuid, session_uuid } = request.params;

  if (user_uuid) {
    const user = await User.findByPkey(user_uuid);

    if (user) {
      request.user = user;
    } else {
      throw new Error("Couldn't load User");
    }
  }

  if (session_uuid) {
    const session = await Session.findByPkey(session_uuid);

    if (session) {
      request.session = session;
    } else {
      throw new Error("Couldn't load Session");
    }
  }

  next();
});

router.post("/users", (request: express.Request, response: express.Response): void => {
  // TODO: Implement create User
});

router.use("/users/:user_uuid", (request: express.Request, response: express.Response): void => {
  // TODO: Implement User loader
});

router.get("/users/:user_uuid", (request: express.Request, response: express.Response): void => {
  // TODO: Implement show User
});

router.put("/users/:user_uuid", (request: express.Request, response: express.Response): void => {
  // TODO: Implement update User
});

router.delete("/users/:user_uuid", (request: express.Request, response: express.Response): void => {
  // TODO: Implement delete User
});

router.post("/sessions", (request: express.Request, response: express.Response): void => {
  // TODO: Implement create Session
});

router.delete("/sessions/:session_uuid", (request: express.Request, response: express.Response): void => {
  // TODO: Implement delete Session
});

export = router;
