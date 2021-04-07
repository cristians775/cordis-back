import { findUserById } from "../Core/Interactors/User/index";
import { addUser } from "../Core/Interactors/User/index";
import { Response, Request } from "express";
import { IGetUser } from "../Interfaces/User/GetUser.interface";
import { IAddUserInput } from "../Interfaces/User/AddUserInput.interface";
class UserCtrl {
  public getUserById = async (req: Request, res: Response): Promise<void> => {
    const { params } = req;
    const { id } = params;
    try {
      const data: IGetUser = await findUserById(id);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  };
  public addUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { body } = req;
      const newUser: IAddUserInput = body;
      const data:IGetUser = await addUser(newUser);
      res.status(200).send(data);
    } catch (e) {
      res.send({ message: e.message });
    }
  };
}

export default new UserCtrl();
