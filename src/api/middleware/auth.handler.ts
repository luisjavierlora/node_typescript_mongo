import { unauthorized } from "@hapi/boom";
import { json, NextFunction, Request, Response, Router } from "express";

export function checkApiKey(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers["api"];
  if (apiKey == "123") {
    next();
  } else {
    next(unauthorized());
  }
}
