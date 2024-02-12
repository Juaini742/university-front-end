import {useState} from "react";
import {Button} from "../atoms";
import {RiMenu2Fill} from "react-icons/ri";
import {Link} from "react-router-dom";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const hanldeVisible = () => {
    setVisible(!visible);
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
                <Link to="/">
                  <Button variant="navbar" className="py-2 px-2">
                    Univesity
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <Button variant="navbar" className="py-2 px-2">
                    About
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/news">
                  <Button variant="navbar" className="py-2 px-2">
                    News
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="">
                  <Button variant="navbar" className="py-2 px-2">
                    Community
                  </Button>
                </Link>
              </li>
            </ul>
            <div className="flex flex-col md:flex-row gap-5 text-sm">
              <Button variant="navbar" className="py-2 px-2 uppercase">
                Login
              </Button>
              <Link to="/register">
                <Button variant="white" className="px-2 py-2">
                  Register
                </Button>
              </Link>
            </div>
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
