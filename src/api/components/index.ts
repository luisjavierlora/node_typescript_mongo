import { Router } from "express";
import router from "./product/routes";
import { orderRouter } from "./order/routes";
import authRouter from "./auth/routes";

export function registerApiRoutes(app: Router, prefix = ""): void {
  app.use(`${prefix}/auth`, authRouter);
  app.use(`${prefix}/products`, router);
  app.use(`${prefix}/orders`, orderRouter);
}
