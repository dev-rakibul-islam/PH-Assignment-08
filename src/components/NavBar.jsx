import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaAppStore } from "react-icons/fa6";
import { GrInstallOption } from "react-icons/gr";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-base-100/95 backdrop-blur supports-[backdrop-filter]:bg-base-100/80 border-b border-base-200 shadow-sm">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-purple-500" : ""
                  }
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <FaAppStore className="mr-1" />{" "}
                <NavLink to="/apps">All Apps</NavLink>
              </li>
              <li>
                <NavLink to="/installation">
                  <GrInstallOption className="mr-1" /> My Installation
                </NavLink>
              </li>
            </ul>
          </div>

          <NavLink
            to="/"
            className="btn btn-ghost normal-case text-lg sm:text-xl font-semibold"
          >
            <img src={logo} alt="AppDeck Logo" className="h-7 w-7" />
            <span className="ml-1">AppDeck</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "text-purple-500" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? "text-purple-500" : ""
                }
              >
                All Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive ? "text-purple-500" : ""
                }
              >
                My Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a
            href="https://github.com/dev-rakibul-islam"
            target="_blank"
            rel="noreferrer"
            className="btn border-none text-white bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-700 hover:to-purple-600"
          >
            <FaGithub className="h-4 w-4" />
            <span className="hidden md:block ml-1">Contribution</span>
          </a>
        </div>
      </div>
    </header>
  );
}
