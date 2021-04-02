import { Document } from "mongoose";
import { IUser } from "./User.interface";
export interface IUserDocument extends IUser, Document {
  id: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  avatar?: string;
  description: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
}
