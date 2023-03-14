import express from "express";
import { initRestRoutes } from "./routes";
import { logErrors, registerErrorHandler } from "./middleware/error.handler";
import { Request, Response, NextFunction } from "express";
import cors from "cors";
import db from "./config/mongo";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
initRestRoutes(app);

app.get("/", (req: Request, res: Response) => {
  res.send("ALL READY");
});

// MIDDLEWARES
app.use(logErrors);
app.use(registerErrorHandler);

db().then(() => console.log("Conexion ready"));

app.listen(port, () => {
  console.log("Mi port" + port);
});
