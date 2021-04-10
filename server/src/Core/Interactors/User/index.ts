import { UserRepository } from "../../Repositories/User.repository";
import { add } from "./AddUser.interactor";
import { findAll } from "./FindAll.interactor";
import { findById } from "./FindById.interactor";
import { remove } from "./Remove.interactor";
const userRepository = new UserRepository();

export const findAllUsers = findAll(userRepository);
export const findUserById = findById(userRepository);
export const addUser = add(userRepository);
export const removeUser = remove(userRepository);
