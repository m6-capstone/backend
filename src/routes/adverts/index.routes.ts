import { Router } from "express";
import { createAdvertController } from "../../controllers/adverts/createAdvert.controller";
import { deleteAdvertController } from "../../controllers/adverts/deleteAdvert.controller";
import { listAllAdvertsController } from "../../controllers/adverts/listAllAdverts.controller";
import { retrieveAdvertsController } from "../../controllers/adverts/retrieveAdvert.controller";
import { updateAdvertController } from "../../controllers/adverts/updateAdvert.controller";
import validationSchemaMiddleware from "../../middlewares/validationSchema.middleware";
import { createAdvertSchema, updateAdvertSchema } from "../../schemas/adverts";

const advertsRoutes = Router();

advertsRoutes.get("/:userId", retrieveAdvertsController);
advertsRoutes.get("/", listAllAdvertsController);
advertsRoutes.post(
  "/",
  validationSchemaMiddleware(createAdvertSchema),
  createAdvertController
);
advertsRoutes.patch(
  "/:id",
  validationSchemaMiddleware(updateAdvertSchema),
  updateAdvertController
);
advertsRoutes.delete("/:id", deleteAdvertController);

export { advertsRoutes };
