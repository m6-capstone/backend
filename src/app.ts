import express from "express";
import "express-async-errors";
import "reflect-metadata";
import cors from "cors";
import { appRoutes } from "./routes/index.routes";
import { errorMiddleware } from "./middlewares/handleError.middleware";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors());

const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger_output.json");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

appRoutes(app);

app.use(errorMiddleware);

export default app;
