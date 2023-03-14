import { Request, Response, NextFunction } from "express";
import { RequestExt } from "../interfaces/req_extend";

const verificationRole = (role: string) => {
  return function (req: RequestExt, res: Response, next: NextFunction) {
    const user = req.user;
    console.log(role);
    if (user?.role === role) {
      next();
    } else {
      res.status(403).send("DONT_PERMISSIONS");
    }
  };
};

export default verificationRole;
