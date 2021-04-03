import { Router } from 'express';
import UserCtrl from '../Controllers/User.controller';
const UserRoute: Router = Router();

UserRoute.get("/",UserCtrl.getUserById);


export default UserRoute;