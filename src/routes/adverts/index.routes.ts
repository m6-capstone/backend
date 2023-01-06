import { Router } from "express";
import { createAdvertController } from "../../controllers/adverts/createAdvert.controller";
import { deleteAdvertController } from "../../controllers/adverts/deleteAdvert.controller";
import { listAllAdvertsController } from "../../controllers/adverts/listAllAdverts.controller";
import { retrieveAdvertController } from "../../controllers/adverts/retrieveAdvert.controller";
import { retireveAdvertsForUserController } from "../../controllers/adverts/retrieveAdvertsForUSer.controller";
import { updateAdvertController } from "../../controllers/adverts/updateAdvert.controller";
import ensureAuthTokenMiddleware from "../../middlewares/ensureAuthToken.middleware";
import validateUuidMiddleware from "../../middlewares/validateUuid.middleware";
import validationSchemaMiddleware from "../../middlewares/validationSchema.middleware";
import { createAdvertSchema, updateAdvertSchema } from "../../schemas/adverts";

const advertsRoutes = Router();

advertsRoutes.get("/user/:userId", retireveAdvertsForUserController);
advertsRoutes.get("/:id", retrieveAdvertController);
advertsRoutes.get("/", listAllAdvertsController);
advertsRoutes.post(
  "/",
  ensureAuthTokenMiddleware,
  validationSchemaMiddleware(createAdvertSchema),
  createAdvertController
);
advertsRoutes.patch(
  "/:id",
  ensureAuthTokenMiddleware,
  validateUuidMiddleware,
  validationSchemaMiddleware(updateAdvertSchema),
  updateAdvertController
);
advertsRoutes.delete(
  "/:id",
  ensureAuthTokenMiddleware,
  validateUuidMiddleware,
  deleteAdvertController
);

export { advertsRoutes };
