import { Express } from "express";
import { advertsRoutes } from "./adverts/index.routes";
import { usersRoutes } from "./user/index.routes";

export const appRoutes = (app: Express) => {
  app.use("/adverts", advertsRoutes);
  app.use("/users", usersRoutes)
};