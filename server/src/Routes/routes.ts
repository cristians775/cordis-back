import IndexRoute from "./IndexRoute.routes";
import UserRoute from "./UserRoute.routes";
export const routes = [
  { route: IndexRoute, path: "/" },
  { route: UserRoute, path: "/users" },
];
