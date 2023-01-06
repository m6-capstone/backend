import { Router } from "express";
import {
  autoRetrieveUserController,
  createUserController,
  retrieveUserController,
} from "../../controllers/user/users.controllers";
import { updateUserController } from "../../controllers/user/users.controllers";
import { listUserController } from "../../controllers/user/users.controllers";
import ensureAuthTokenMiddleware from "../../middlewares/ensureAuthToken.middleware";

const usersRoutes = Router();

usersRoutes.post("/", createUserController);
usersRoutes.patch("/:id", ensureAuthTokenMiddleware, updateUserController);
usersRoutes.get("/", listUserController);
usersRoutes.get(
  "/profile",
  ensureAuthTokenMiddleware,
  autoRetrieveUserController
);
usersRoutes.get("/:id", retrieveUserController);

export { usersRoutes };
