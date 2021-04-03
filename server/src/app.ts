import express, { Application } from "express";
import DataBase from "./Database/Database";
import cors from "cors";
import morgan from "morgan";
import { routes } from "./Routes/routes";
import dotenv from "dotenv"


dotenv.config({path:".env"});

const app:Application = express();
const port:string =  process.env.SERVER_PORT;

//DB CONNECTION
DataBase.connect();


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// ROUTES
routes.forEach((route:any) =>app.use(route.path, route.route));


app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});

