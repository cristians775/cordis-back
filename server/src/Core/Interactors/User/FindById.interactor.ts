import { replaceCommasInFields } from "../../../Utils/replaceCommasInFields";
import { IGetUser } from "../../../Interfaces/User/GetUser.interface";
import { UserRepository } from "../../Repositories/User.repository";

export const findById = (userRepository: UserRepository) => async (
  id: string,
  fields: string = ""
) => {
  const UserRepository: UserRepository = userRepository;
  const idParam: string[] = id.split(",");
  const fieldsQuery: string = replaceCommasInFields(fields);
  const user: IGetUser | IGetUser[] = await UserRepository.findById(
    idParam,
    fieldsQuery
  );
  return user;
};
