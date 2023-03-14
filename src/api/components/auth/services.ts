import UserModel from "../user/model";
import { Auth } from "./interfaces";
import { User } from "../user/interfaces";
import { encrypt, verified } from "../../utils/bcrypt.handle";
import { generateToken } from "../../utils/jwt.handle";
//EL SERVICIO DEBE HACER LA LOGICA DE NEGOCIO

const registerNewUser = async ({ username, password, name, role }: User) => {
  const checkIs = await UserModel.findOne({ username: username });
  if (checkIs) return "ALREADY_USER";
  const passHash = await encrypt(password);

  const registerNewUser = await UserModel.create({
    username,
    password: passHash,
    name,
    role,
  });

  return registerNewUser;
};

const loginUser = async ({ username, password }: Auth) => {
  const checkIs = await UserModel.findOne({ username: username });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password; //TODO el encriptado
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";
  const token = generateToken(checkIs.username, checkIs.role);

  const data = { token, user: checkIs };
  return data;
};

export { registerNewUser, loginUser };
