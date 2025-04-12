import { TbLogin2, TbSearch } from "react-icons/tb";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const links = (
    <>
      <li>
        <a href="">Audio</a>
      </li>
      <li>
        <a href="">Phone</a>
      </li>
      <li>
        <a href="">Tablet</a>
      </li>
      <li>
        <a href="">Power Bank</a>
      </li>
      <li>
        <a href="">Accessories</a>
      </li>
    </>
  );

  return (
    <div className=" bg-[#081621]">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="text-white menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <div className="flex gap-4">
            <a className="btn bg-[#ffc000] font-extrabold text-xl rounded-lg">
              <span className="text-[#191c1e]">Gadget</span>{" "}
              <span className="text-[#191c1e]">&</span>{" "}
              <span className="text-[#191c1e]">Park</span>
            </a>

            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered lg:w-96 md:w-auto"
              />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-white menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#ffc000] text-[#191c1e] font-bold rounded-lg">
            <TbLogin2 className="text-xl"></TbLogin2>Login
          </a>
        </div>
      </div>

      <div className="navbar max-w-7xl mx-auto">
        <Link>Audio</Link>
      </div>

      {/* <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <a className="btn bg-[#ffc000] font-extrabold text-xl rounded-lg">
          <span className="text-[#191c1e]">Gadget</span>{" "}
          <span className="text-[#191c1e]">&</span>{" "}
          <span className="text-[#191c1e]">Park</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#ffc000] text-[#191c1e] font-bold rounded-lg">
          <TbLogin2 className="text-xl"></TbLogin2>Login
        </a>
      </div> */}
    </div>
  );
};

export default NavBar;
