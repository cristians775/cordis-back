import { IGetUser } from "../../../Interfaces/User/GetUser.interface";
import { IAddUserInput } from "../../../Interfaces/User/AddUserInput.interface";
import { UserRepository } from "../../Repositories/User.repository";
import { USER_OR_EMAIL_EXISTS } from "../../../Constants/Wording/User/User.wording";

export const add = (userRepository: UserRepository) => async (
  user: IAddUserInput
): Promise<IGetUser> => {
  const UserRepository: UserRepository = userRepository;
  const newUser = user;
  const { username, email }: { username: string; email: string } = newUser;
  const anyExists =
    (await userRepository.exists({ email })) ||
    (await userRepository.exists({ username }));
  if (anyExists) throw new Error(USER_OR_EMAIL_EXISTS);
  const data = await UserRepository.add(newUser);
  return data;
};
