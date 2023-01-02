import { Router } from "express";
import { createUserController } from "../../controllers/user/users.controllers";

const usersRoutes = Router();

usersRoutes.post("/", createUserController)

export { usersRoutes};