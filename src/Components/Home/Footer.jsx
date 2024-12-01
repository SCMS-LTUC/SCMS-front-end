// import { logo } from "./assets";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-12">
      <div className="md:max-w-[1200px] m-auto grid md:grid-cols-3 gap-8 px-6">
        {/* Logo and Contact */}
        <div>
          <h1 className="h-8 mb-6 font-bold text-secondary-dark text-4xl">
            Learnify
          </h1>
          {/* <img src={logo} className="h-8 mb-6" alt="Logo" /> */}
          <p className="text-gray-600 text-sm mb-4">
            Call: +123 400 123
            <br />
            Email: example@mail.com
          </p>
          <div className="flex space-x-4">
            <FaFacebookF className="text-gray-500 hover:text-[#4DC39E] cursor-pointer" />
            <FaDribbble className="text-gray-500 hover:text-[#4DC39E] cursor-pointer" />
            <FaLinkedinIn className="text-gray-500 hover:text-[#4DC39E] cursor-pointer" />
            <FaInstagram className="text-gray-500 hover:text-[#4DC39E] cursor-pointer" />
            <FaBehance className="text-gray-500 hover:text-[#4DC39E] cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Subscribe</h3>
          <p className="text-gray-600 text-sm mb-4">
            Stay updated with our latest courses and offers.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              className="bg-gray-200 p-3 rounded-md text-sm"
              type="email"
              placeholder="Your email"
            />
            <button
              type="submit"
              className="bg-secondary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-[#178f69]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
