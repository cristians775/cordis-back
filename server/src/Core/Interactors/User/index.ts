import { UserRepository } from "../../Repositories/User.repository";
import { findAll } from "./FindAll.interactor";
import { findOne } from "./FindOneByEmail.interactor";
const userRepository = new UserRepository();

export const findAllUsers = findAll(userRepository); 
export const findUserByEmail = findOne(userRepository);
