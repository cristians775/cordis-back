import { Model } from "mongoose";
import { IUserDocument } from "./UserDocument.interface";

export interface IUserModel extends Model<IUserDocument>{};