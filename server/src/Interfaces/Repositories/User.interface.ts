import { IGetUser } from "../User/GetUser.interface";

export interface IUserRepository {
  findAll(): Promise<IGetUser[]>;
  findById(
    id: string | string[],
    fields: string
  ): Promise<IGetUser | IGetUser[]>;
  exists(email: { email: string }): Promise<boolean>;
  exists(username: { username: string }): Promise<boolean>;
  remove(id: string | string): Promise<any>;
}
