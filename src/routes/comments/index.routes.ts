import { Router } from "express";
import { createCommentsController } from "../../controllers/comments/comments.controllers";

const commentsRoutes = Router();

commentsRoutes.post("/", createCommentsController)

export { commentsRoutes};