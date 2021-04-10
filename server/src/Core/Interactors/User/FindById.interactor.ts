import { IGetUser } from "../../../Interfaces/User/GetUser.interface";
import { UserRepository } from "../../Repositories/User.repository";

export const findById = (userRepository: UserRepository) => async (
  id: string,
  fields: string
) => {
  const UserRepository: UserRepository = userRepository;
  const idParam = id.split(",");
  const fieldsQuery = fields.replace(/\,/g, " ").replace("password", "");
  const user: IGetUser | IGetUser[] = await UserRepository.findById(
    idParam,
    fieldsQuery
  );
  return user;
};
