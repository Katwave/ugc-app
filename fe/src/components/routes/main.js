import { Route } from "react-router";
import HomePage from "../pages/home";
import SearchPage from "../pages/search";

const MainRoutes = [
  {
    routeType: Route,
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    routeType: Route,
    path: "/home",
    exact: true,
    component: HomePage,
  },
  {
    routeType: Route,
    path: "/search",
    exact: true,
    component: SearchPage,
  },
];

export default MainRoutes;
