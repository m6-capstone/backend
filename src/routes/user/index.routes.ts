import { Router } from "express";
import { createUserController } from "../../controllers/user/users.controllers";
import { updateUserController } from "../../controllers/user/users.controllers";

const usersRoutes = Router();

usersRoutes.post("/", createUserController)
usersRoutes.patch("/:id", updateUserController)

export { usersRoutes};