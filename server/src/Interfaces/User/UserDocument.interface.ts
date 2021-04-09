import { Document } from "mongoose";
import { IUser } from "./User.interface";
export interface IUserDocument extends IUser, Document {}
