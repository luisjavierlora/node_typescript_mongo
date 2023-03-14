import { Router } from "express";
import { OrderController } from "./controller";
import { checkJwt } from "../../middleware/session.handler";
import verificationRole from "../../middleware/role.handler";
/*
A esta ruta solo pueden acceder las personas que tengan una session activa o
un JWT valido
*/

const orderRouter = Router();
const controller = new OrderController();

orderRouter.get(
  "/",
  checkJwt,
  verificationRole("admin"),
  controller.getAllOrders
);

export { orderRouter };
