import { IGetUser } from "../../../Interfaces/User/GetUser.interface";
import { UserRepository } from "../../Repositories/User.repository";

export const findById = (userRepository: UserRepository) => async (
  id: string,
  fields: string = ""
) => {
  const UserRepository: UserRepository = userRepository;
  const idParam: string[] = id.split(",");
  const fieldsQuery: string = fields
    .replace(/\,/g, " ")
    .replace("password", "");
  const user: IGetUser | IGetUser[] = await UserRepository.findById(
    idParam,
    fieldsQuery
  );
  return user;
};
