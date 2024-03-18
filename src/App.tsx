import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom";
import {useAppContext} from "./middleware/AppContext";
import {RegisterScreen} from "./components/pages/RegisterScreen";
import {LoginScreen} from "./components/pages/LoginScreen";
import {HomeScreen} from "./components/pages/HomeScrees";
import {AboutScreen} from "./components/pages/AboutScreen";
import {NewsScreen} from "./components/pages/NewsScreen";
import {CourseScreen} from "./components/pages/CourseScreen";
import {useEffect, useState} from "react";
import Loaders from "./components/molecules/loader";
import NimScreen from "./components/pages/NimScreen";
import {NewsDetailScreen} from "./components/pages/NewsDetailScreen";
import {CourseDetailScreen} from "./components/pages/CourseDetailScreen";

function App() {
  const {isLoggedIn} = useAppContext();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLoggedIn]);

  if (!isReady) {
    return (
      <div className="bg-black/20 backdrop-blur-sm fixed z-50 top-0 bottom-0 left-0 right-0 flex justify-center">
        <Loaders />
      </div>
    );
  }

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
      path: "/nim",
      element: <NimScreen />,
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
      element:
        isLoggedIn === true ? (
          <NewsDetailScreen />
        ) : (
          <Navigate to="/login" replace={true} />
        ),
    },
    {
      path: "/course",
      element:
        isLoggedIn === true ? (
          <CourseScreen />
        ) : (
          <Navigate to="/login" replace={true} />
        ),
    },
    {
      path: "/detail/course/:id",
      element:
        isLoggedIn === true ? (
          <CourseDetailScreen />
        ) : (
          <Navigate to="/login" replace={true} />
        ),
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
