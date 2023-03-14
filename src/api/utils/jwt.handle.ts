import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "tokes.010101";

const generateToken = (id: string, role: string) => {
  const jwt = sign({ id, role }, JWT_SECRET, {
    expiresIn: "2h",
  });

  return jwt;
};

const verifyToken = (jwt: string) => {
  console.log(jwt);
  const isOk = verify(jwt, JWT_SECRET);

  return isOk;
};

export { generateToken, verifyToken };
