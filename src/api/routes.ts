import { Request, Response, Router } from "express";
import { registerApiRoutes } from "./components";

export function initRestRoutes(router: Router): void {
  const prefix = "/api/v1";

  router.get(prefix, (req: Request, res: Response) => res.send("PING"));

  registerApiRoutes(router, prefix);
}
