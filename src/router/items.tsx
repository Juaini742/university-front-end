import {createBrowserRouter} from "react-router-dom";
import {HomeScreen} from "../components/pages/HomeScrees";
import {AboutScreen} from "../components/pages/AboutScreen";
import {NewsScreen} from "../components/pages/NewsScreen";
import {NewsDetailScreen} from "../components/pages/NewsDetailScreen";

export const routers = createBrowserRouter([
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
