import { IGetUser } from "../Interfaces/User/GetUser.interface";
import UserModel from "../Entities/Models/User.model";
class UserRepository {
  find = async (id: number): Promise<IGetUser> => {
    const user: any = await UserModel.find();
    return user;
  };
}

export default new UserRepository();
