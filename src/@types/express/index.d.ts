import * as express from "express";

declare global {
	namespace Express {
		interface Request {
			users: {
				userId: string;
			};
		}
	}
}