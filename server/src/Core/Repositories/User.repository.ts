import { IUser } from "../../Interfaces/User/User.interface";
import { IUserRepository } from "../../Interfaces/Repositories/User.interface";
import { IGetUser } from "../../Interfaces/User/GetUser.interface";
import UserModel from "../Entities/Models/User.model";

export class UserRepository implements IUserRepository {
  public findAll = async (): Promise<IGetUser[]> => {
    const user: IGetUser[] = await UserModel.find();
    return user;
  };
  public findOneByEmail = async (email: string): Promise<IGetUser> => {
    const user: IGetUser = await UserModel.findOne({ email });
    return user;
  };
}
