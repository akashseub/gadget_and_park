import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
