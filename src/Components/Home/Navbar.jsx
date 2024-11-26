import { useState } from "react";
import { lock, hamburgerMenu, close } from "./assets";
import logo from "./assets/no-back-80.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setToggle(!toggle);

  const handleNavigation = (path) => {
    navigate(path);
    setToggle(false);
  };

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        {/* Left: Site logo */}
        <div className="flex items-center ">
          <div className="flex items-center justify-between ">
            <img src={logo} alt="Fusion Learn Logo" className="h-14 !w-20" />
            <h1
              className="text-primary-dark font-medium	text-3xl !font-poppins"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                // fontWeight: 500,
              }}
            >
              Learnify
            </h1>
          </div>
        </div>
        {/* <span onClick={() => handleNavigation("/")}>
          <img src={logo} className=" h-14 !w-20" />{" "}
        </span> */}
        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li onClick={() => handleNavigation("/")}>Home</li>
            <li onClick={() => handleNavigation("/about-us")}>About Us</li>
            <li onClick={() => handleNavigation("/courses")}>Courses</li>
            <li onClick={() => handleNavigation("/contact-us")}>Contact Us</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button
            className="flex justify-between items-center bg-transparent px-6 gap-2"
            onClick={() => handleNavigation("/login")}
          >
            <img src={lock} />
            Login
          </button>
          <button
            className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold"
            onClick={() => handleNavigation("/signup")}
          >
            Sign Up For Free
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li
            className="p-4 hover:bg-gray-100"
            onClick={() => handleNavigation("/")}
          >
            Home
          </li>
          <li
            className="p-4 hover:bg-gray-100"
            onClick={() => handleNavigation("/about-us")}
          >
            About
          </li>
          <li
            className="p-4 hover:bg-gray-100"
            onClick={() => handleNavigation("/courses")}
          >
            Courses
          </li>
          <li
            className="p-4 hover:bg-gray-100"
            onClick={() => handleNavigation("/contact-us")}
          >
            Contact Us
          </li>
          <div className="flex flex-col my-4 gap-4">
            <button
              className="border border-[20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4"
              onClick={() => handleNavigation("/login")}
            >
              <img src={lock} />
              Login
            </button>
            <button
              className="px-8 py-5 rounded-md bg-[#20B486] text-white font-bold"
              onClick={() => handleNavigation("/signup")}
            >
              Sign Up For Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
