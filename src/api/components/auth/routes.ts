import express from "express";
import { loginCtrl, registerCtrl } from "./controller";

const authRouter = express.Router();

authRouter.post("/register", registerCtrl);
authRouter.post("/login", loginCtrl);

export default authRouter;
