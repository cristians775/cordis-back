import { UserRepository } from "../../Repositories/User.repository";

export const findAll = (userRepository: UserRepository) => async () => {
  const UserRepository: UserRepository = userRepository;
  const users: any = UserRepository.findAll();
  return users;
};
