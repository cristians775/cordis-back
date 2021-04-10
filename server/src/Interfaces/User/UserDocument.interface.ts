import { Document } from "mongoose";
import { IUser } from "./User.interface";
export interface IUserDocument extends IUser, Document {
  select(
    fields: string[]
  ):
    | import("./GetUser.interface").IGetUser
    | import("./GetUser.interface").IGetUser[]
    | PromiseLike<
        | import("./GetUser.interface").IGetUser
        | import("./GetUser.interface").IGetUser[]
      >;
}
