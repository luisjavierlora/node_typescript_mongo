import { NextFunction, Request, Response } from "express";

export function logErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  next(err);
}

/**
 * Init Express error handler
 *
 */
export function registerErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res.status(500).json({
    error: err.message || err,
    stack: err.stack,
    status: 500,
  });
}
