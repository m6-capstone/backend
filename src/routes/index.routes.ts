import { Express } from "express";
import { advertsRoutes } from "./adverts/index.routes";


export const appRoutes = (app: Express) => {
  app.use("/adverts", advertsRoutes);
};