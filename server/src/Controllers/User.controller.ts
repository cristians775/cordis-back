import { findUserByEmail } from "../Core/Interactors/User/index";
import { Response, Request } from "express";

const getUserByEmail = async (req: Request, res: Response): Promise<void> => {
    const { query } = req;
    const { email } = query;

    try {
      const data = await findUserByEmail(email);
      res.send(data);
    } catch (e) {

    }
  };
export default getUserByEmail


