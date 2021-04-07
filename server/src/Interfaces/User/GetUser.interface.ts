import { IUser } from "./User.interface";
export interface IGetUser {
  name: IUser["name"];
  lastname: IUser["lastname"];
  username: IUser["username"];
  email: IUser["email"];
  avatar?: IUser["avatar"];
  description: IUser["description"];
  createdAt?: IUser["createdAt"];
  updatedAt?: IUser["updatedAt"];
}
