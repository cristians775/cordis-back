import { Router } from "express";
import UserCtrl from "../Controllers/User.controller";
const UserRoute: Router = Router();

UserRoute.get("/:id", UserCtrl.getUserById);
UserRoute.post("/", UserCtrl.addUser);
UserRoute.delete("/:id", UserCtrl.removeUser);

export default UserRoute;
