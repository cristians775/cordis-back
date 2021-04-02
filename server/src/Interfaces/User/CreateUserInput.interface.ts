import { IUser } from "./User.interface";
export interface ICreateUserInput {
  id: IUser["id"];
  name: IUser["name"];
  lastname: IUser["lastname"];
  username: IUser["username"];
  email: IUser["email"];
  avatar?: IUser["avatar"];
  description: IUser["description"];
  password?: IUser["password"];
  createdAt?: IUser["createdAt"];
  updatedAt?: IUser["updatedAt"];
}
