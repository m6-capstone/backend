import { Router } from "express";
import { createLoginController } from "../../controllers/login/login.controllers";

const loginRoutes = Router();

loginRoutes.post("/", createLoginController);

export { loginRoutes };