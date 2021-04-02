import { IUser } from "./User.interface";
export interface IUpdateUserInput {
  name?: IUser["name"];
  lastname?: IUser["lastname"];
  username?: IUser["username"];
  password?:IUser["password"];
  email?: IUser["email"];
  avatar?: IUser["avatar"];
  description?: IUser["description"];
}
