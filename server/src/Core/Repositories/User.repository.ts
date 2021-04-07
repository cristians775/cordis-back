import { IUserRepository } from "../../Interfaces/Repositories/User.interface";
import { IGetUser } from "../../Interfaces/User/GetUser.interface";
import UserModel from "../Models/User.model";
import { IUserDocument } from "../../Interfaces/User/UserDocument.interface";
import { IAddUserInput } from "../../Interfaces/User/AddUserInput.interface";

export class UserRepository implements IUserRepository {
  public findAll = async (): Promise<IGetUser[]> => {
    const user: IGetUser[] = await UserModel.find();
    return user;
  };
  public findById = async (id: string | string[]): Promise<IGetUser> => {
    const user: IGetUser | IGetUser[] = await UserModel.findById(id);
    return user;
  };

  public async exists(username: { username: string }): Promise<boolean>;
  public async exists(email: { email: string }): Promise<boolean>;
  public async exists(data: any) {
    const { username, email } = data;
    return username
      ? await UserModel.exists({ username })
      : await UserModel.exists({ email });
  }

  public add = async (user: IAddUserInput): Promise<IGetUser> => {
    const newUser: IUserDocument = new UserModel(user);
    return await newUser.save();
  };
}
