import { findUserByEmail } from "../Core/Interactors/User/index";
import { Response, Request } from "express";
class UserCtrl {
  public getUserById = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;
    const { email } = body;

    try {
      const data = await findUserByEmail(email);
      res.send(data);
    } catch (e) {

    }
  };
}

export default new UserCtrl();
