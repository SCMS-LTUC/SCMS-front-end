import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function Layout({ children }) {
  // <div className="flex h-screen !bg-neutral-background ">
  // <Sidebar />

  // {/* Main content area */}
  //   <Navbar /> {/* Add the Navbar here */}

  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className=" h-screen flex flex-col">
      <div>
        <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex ">
        <div>
          <Sidebar isOpen={isOpen} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children prop is a valid React node and is required
};
