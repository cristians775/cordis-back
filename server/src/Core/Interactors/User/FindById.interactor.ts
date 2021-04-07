import { IGetUser } from "../../../Interfaces/User/GetUser.interface";
import { UserRepository } from "../../Repositories/User.repository";

export const findById = (userRepository: UserRepository) => async (
  id:string
) => {
  const UserRepository: UserRepository = userRepository;
  const user: IGetUser = await UserRepository.findById(id);
  return user;
};
