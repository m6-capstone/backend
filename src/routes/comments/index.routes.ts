import { Router } from "express";
import { createCommentsController, deleteCommentsController} from "../../controllers/comments/comments.controllers";
import { listCommentsController } from "../../controllers/comments/comments.controllers";
import ensureAuthTokenMiddleware from "../../middlewares/ensureAuthToken.middleware";

const commentsRoutes = Router();

commentsRoutes.post("/:id",ensureAuthTokenMiddleware,createCommentsController);
commentsRoutes.get("/", listCommentsController);
commentsRoutes.delete("/:id", ensureAuthTokenMiddleware, deleteCommentsController);

export { commentsRoutes };
