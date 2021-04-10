import { IGetUser } from "../../../Interfaces/User/GetUser.interface";
import { IAddUserInput } from "../../../Interfaces/User/AddUserInput.interface";
import { UserRepository } from "../../Repositories/User.repository";
export const remove = (userRepository: UserRepository) => async (
  id: string | string[]
): Promise<any> => {
  const UserRepository: UserRepository = userRepository;
  const data: any = await UserRepository.remove(id);
  return { message: "Se han eliminado los usuarios indicados", ...data };
};
