import { IGetUser } from "../User/GetUser.interface";
import { IUser } from "../User/User.interface";
export interface IUserRepository {
  findAll(): Promise<IGetUser[]>;
  findById(id: string | number[]): Promise<IGetUser | IGetUser[]>;
  exists(email: { email: string }): Promise<boolean>;
  exists(username: { username: string }): Promise<boolean>;
}
