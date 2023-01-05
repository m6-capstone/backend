import { Express } from "express";
import { advertsRoutes } from "./adverts/index.routes";
import { usersRoutes } from "./user/index.routes";
import { commentsRoutes } from "./comments/index.routes";
import { loginRoutes } from './login/index.routes'

export const appRoutes = (app: Express) => {
  app.use("/adverts", advertsRoutes);
  app.use("/users", usersRoutes)
  app.use("/comments", commentsRoutes)
  app.use("/login", loginRoutes)
};