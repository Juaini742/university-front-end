import {useState} from "react";
import {Button} from "../atoms";
import {RiMenu2Fill} from "react-icons/ri";
import {Link, NavLink} from "react-router-dom";
import * as apiUtils from "../../utils";
import {useMutation} from "react-query";
import {useAppContext} from "../../middleware/AppContext";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const mutation = useMutation(apiUtils.logout);
  const {isLoggedIn} = useAppContext();

  const hanldeVisible = () => {
    setVisible(!visible);
  };

  const handleLogout = () => {
    mutation.mutate();
  };

  return (
    <>
      <div className="h-16 bg-primary flex items-center">
        <div className="w-[90%] mx-auto flex justify-between">
          <div>
            <h2 className="font-prociono py-2 px-2">Ukom University</h2>
          </div>
          <div
            className={`absolute md:static top-20 rounded-lg right-5 flex-col md:flex-row bg-primary md:bg-transparent px-10 md:px-0 py-5 md:py-0 ${
              visible ? "flex" : "hidden md:flex"
            }`}
          >
            <ul className="flex flex-col md:flex-row gap-3 text-sm border-b-2 md:border-b-0 pb-3 md:pb-0">
              <li>
                <NavLink to="/">
                  <Button variant="navbar" className="py-2 px-2">
                    Home
                  </Button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <Button variant="navbar" className="py-2 px-2">
                    About
                  </Button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/news">
                  <Button variant="navbar" className="py-2 px-2">
                    News
                  </Button>
                </NavLink>
              </li>
              {isLoggedIn === true ? (
                <li>
                  <NavLink to="/course">
                    <Button variant="navbar" className="py-2 px-2">
                      Course
                    </Button>
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </ul>
            {isLoggedIn === true ? (
              <div className="ml-3 mt-5 md:mt-0 text-sm">
                <Button
                  onClick={handleLogout}
                  variant="white"
                  className="px-4 py-2"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="ml-3 mt-5 md:mt-0 text-sm">
                <Link to="/register">
                  <Button variant="white" className="px-4 py-2">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
          <div className="flex md:hidden">
            <Button
              onClick={hanldeVisible}
              variant="navbar"
              className="py-2 px-2 text-xl"
            >
              <RiMenu2Fill />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
