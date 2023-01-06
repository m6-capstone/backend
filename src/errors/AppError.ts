// class AppError extends Error {
//   statusCode: number;

//   constructor(message: string, statusCode: number = 400) {
//     super();
//     this.message = message;
//     this.statusCode = statusCode;
//   }
// }

// export default AppError;

// import { Response } from "express";

// export class AppError extends Error {
//   statusCode;

//   constructor(message: number, statusCode: number) {
//     super();
//     this.statusCode = statusCode;
//     this.message = message;
//   }
// }

// export const handleError = (err: AppError, resp: Response) => {
//   const { statusCode, message } = err;
//   return resp.status(statusCode).json({
//     status: "error",
//     statusCode,
//     message,
//   });

import { Response } from "express";

export class AppError extends Error {
  statusCode;

  constructor(message: string, statusCode: number) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (err: AppError, resp: Response) => {
  const { statusCode, message } = err;
  return resp.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};
