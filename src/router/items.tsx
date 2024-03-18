import {Navigate, createBrowserRouter} from "react-router-dom";
import {HomeScreen} from "../components/pages/HomeScrees";
import {AboutScreen} from "../components/pages/AboutScreen";
import {NewsScreen} from "../components/pages/NewsScreen";
import {NewsDetailScreen} from "../components/pages/NewsDetailScreen";
import {RegisterScreen} from "../components/pages/RegisterScreen";
import {LoginScreen} from "../components/pages/LoginScreen";
import {CourseScreen} from "../components/pages/CourseScreen";
import {useAppContext} from "../middleware/AppContext";

export const Routers = () => {
  const {isLoggedIn} = useAppContext();

  const routers = createBrowserRouter([
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
      element: isLoggedIn ? <HomeScreen /> : <Navigate to="/" replace={true} />,
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
    {
      path: "/course",
      element: <CourseScreen />,
    },
  ]);
};
