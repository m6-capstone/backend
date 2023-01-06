import { validate } from "uuid";

import { Request, Response, NextFunction } from "express";
import {AppError} from "../errors/AppError";

const validateUuidMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id = request.params.id;
  console.log(id);
  console.log(validate(id));
  if (!validate(id)) {
    return response.status(400).json({"message":"ID is not valid UUID"})
  }
  next();
};

export default validateUuidMiddleware;
