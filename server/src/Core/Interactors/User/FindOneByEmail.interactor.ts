import { UserRepository } from "../../Repositories/User.repository";


export const findOne =(userRepository:UserRepository)=> async (email:string)=>{
    const UserRepository: UserRepository = userRepository;
    const users:any = UserRepository.findOneByEmail(email);
    return users;
}