import { Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req_extend";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";

    const jwt = jwtByUser.split(" ").pop(); // ['Bearer', '1111111' ]
    const isUser = verifyToken(`${jwt}`) as { id: string; role: string };

    if (!isUser) {
      res.status(401).send("TOKEN_NOT_VALID");
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    res.status(400).send("SESSION_NO_VALIDA");
  }
};

export { checkJwt };
