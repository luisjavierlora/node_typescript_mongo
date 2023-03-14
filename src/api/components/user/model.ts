import { Schema, model } from "mongoose";
import { User } from "./interfaces";

const UserSchema = new Schema<User>(
  {
    name: {
      requiered: true,
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true, //que no se repita en la base de datos
    },
    role: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = model("users", UserSchema);
export default UserModel;
