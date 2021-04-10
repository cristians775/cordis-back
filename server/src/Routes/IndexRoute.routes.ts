import { Router } from "express";

const IndexRoute = Router();

IndexRoute.get("/", (req, res) => {
  res.send("Hello");
});

export default IndexRoute;
