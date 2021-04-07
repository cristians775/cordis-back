import { IUser } from "../User/User.interface";
export interface IUserRepository{
    findAll():Promise<IUser[]>;
    findById(id:string):Promise<IUser>;
    exists(email:{email:string}):Promise<boolean>;
    exists(username:{username:string}):Promise<boolean>;
}