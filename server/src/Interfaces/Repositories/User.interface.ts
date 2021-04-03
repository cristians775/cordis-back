import { IUser } from "../User/User.interface";
export interface IUserRepository{
    findAll():Promise<IUser[]>;
    findOneByEmail(email:string):Promise<IUser>;
}