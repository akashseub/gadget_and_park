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
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          {/* <div className="dropdown">
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
          </div> */}

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
        <div className="navbar-end">
          <a className="btn bg-[#ffc000] text-[#191c1e] font-bold rounded-lg">
            <TbLogin2 className="text-xl"></TbLogin2>Login
          </a>
        </div>
      </div>

      <div className="navbar text-white container mx-auto">

        {/* <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul className="flex space-x-4 text-lg font-semibold mx-auto">
              {links}
            </ul>
          </div>
        </div> */}


        <div className="navbar-start">
          <div className="dropdown text-[#191c1e]">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

              {links}

            </ul>
          </div>
        </div>

        <div className="navbar hidden lg:flex">
          <ul className="flex space-x-4 text-lg font-semibold mx-auto">
            {links}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default NavBar;
