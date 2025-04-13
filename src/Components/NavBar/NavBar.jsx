import { TbGift, TbLogin2, TbSearch } from "react-icons/tb";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const links = (
    <>
      <li className="relative group">
        <a href="#" className="cursor-pointer">Phone & Tablets</a>
        <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg z-50 min-w-[180px]">
          {["Apple", "Samsung", "Vivo", "Oppo", "Realme", "Huawei", "Honor"].map((brand, index) => (
            <li key={index}>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">{brand}</a>
            </li>
          ))}
        </ul>
      </li>

      <li><a href="">Laptop & Desktop</a></li>
      <li><a href="">Audio</a></li>
      <li><a href="">Power & Accessories</a></li>
      <li><a href="">Fitness & Wearable</a></li>
      <li><a href="">Peripherals</a></li>
      <li><a href="">Cover & Glass</a></li>
      <li><a href="">Smart Electronics</a></li>
      <li><a href="">Used Device</a></li>
    </>
  );

  return (
    <div>
      <div className="hidden lg:flex navbar bg-secondary">

        <div className="container mx-auto text-white flex justify-between items-center">

          <div className="flex items-center space-x-16">
            <a className="text-secondary text-lg font-bold rounded-lg p-2" href=""><img className="h-[50px]" src={logo} alt="" /></a>
            <div className="form-control relative flex items-center">
              <input className="p-2 rounded-full w-[400px]" type="text" name="search" id="" placeholder="Search here" />
              <button className="absolute right-4 text-secondary" type="submit"><TbSearch className="text-3xl font-bold" strokeWidth={2.5}></TbSearch></button>
            </div>
            <div>
              <button className="flex items-center gap-2">
                <TbGift className="text-4xl text-primary"></TbGift>
                <p className="text-white text-xm">Boishakhi <br /> Offer</p>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex">
            <button className="btn bg-primary text-secondary text-lg flex items-center gap-2 rounded-xl px-4 py-2">
              <TbLogin2 className="text-xl font-bold" />
              <span className="font-bold">Login</span>
            </button>
          </div>

        </div>

      </div>

      <div className="shadow py-2">
        <ul className="flex gap-4 justify-center font-semibold">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
