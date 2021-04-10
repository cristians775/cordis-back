import {
  findUserById,
  addUser,
  removeUser,
} from "../Core/Interactors/User/index";
import { Response, Request } from "express";
import { IGetUser } from "../Interfaces/User/GetUser.interface";
import { IAddUserInput } from "../Interfaces/User/AddUserInput.interface";

class UserCtrl {
  public getUserById = async (req: Request, res: Response): Promise<void> => {
    const { params, query } = req;
    const { fields }: any = query;
    const { id }: any = params;
    try {
      const data: IGetUser | IGetUser[] = await findUserById(id, fields);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  };

  public addUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { body } = req;
      const newUser: IAddUserInput = body;
      const data: IGetUser = await addUser(newUser);
      res.status(200).send(data);
    } catch (e) {}
  };

  public removeUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { params } = req;
      const { id }: any = params;
      const paramId = id.split(",");
      const data: any = await removeUser(paramId);
      res.send(data);
    } catch (e) {}
  };
}

export default new UserCtrl();
