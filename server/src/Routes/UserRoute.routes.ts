import { Router } from 'express';
import getUserByEmail from '../Controllers/User.controller';
const UserRoute: Router = Router();

UserRoute.get("/",getUserByEmail);


export default UserRoute;