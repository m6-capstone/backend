import { Router } from "express";
import { createCommentsController } from "../../controllers/comments/comments.controllers";
import { listCommentsController } from '../../controllers/comments/comments.controllers'
const commentsRoutes = Router();

commentsRoutes.post("/", createCommentsController);
commentsRoutes.get("/", listCommentsController);

export { commentsRoutes};