import { Router } from 'express';
import UserCtrl from '../Controllers/User.controller';
const UserRoute: Router = Router();

UserRoute.get("/",UserCtrl.getUserById);
UserRoute.post("/",UserCtrl.addUser);

export default UserRoute;