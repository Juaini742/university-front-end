import {createBrowserRouter} from "react-router-dom";
import {HomeScreen} from "../components/pages/HomeScrees";
import {AboutScreen} from "../components/pages/AboutScreen";
import {NewsScreen} from "../components/pages/NewsScreen";
import {NewsDetailScreen} from "../components/pages/NewsDetailScreen";
import {RegisterScreen} from "../components/pages/RegisterScreen";
import {LoginScreen} from "../components/pages/LoginScreen";

export const routers = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/about",
    element: <AboutScreen />,
  },
  {
    path: "/news",
    element: <NewsScreen />,
  },
  {
    path: "/news/:id",
    element: <NewsDetailScreen />,
  },
]);
