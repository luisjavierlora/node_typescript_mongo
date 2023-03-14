import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../../interfaces/req_extend";

export class OrderController {
  public createOrder(req: Request, res: Response): void {
    const { customerName, product, quantity } = req.body;
  }

  public getAllOrders(
    req: RequestExt,
    res: Response,
    next: NextFunction
  ): void {
    try {
      res.send({
        data: "esto solo lo puede ver alguien con JWT",
        user: req.user,
      });
    } catch (e) {
      next(e);
    }
  }
}
