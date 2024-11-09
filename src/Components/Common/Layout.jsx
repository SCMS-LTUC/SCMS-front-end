import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function Layout({ children, menuItems }) {
  // <div className="flex h-screen !bg-neutral-background ">
  // <Sidebar />

  // {/* Main content area */}
  //   <Navbar /> {/* Add the Navbar here */}

  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div className="  flex flex-col !bg-neutral-background">
      <div>
        <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="min-h-screen">
        <div className="flex h-full min-h-screen">
          <div>
            <Sidebar isOpen={isOpen} menuItems={menuItems} />
          </div>
          <div className="p-6 container w-screen flex-1 overflow-auto ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children prop is a valid React node and is required
  menuItems: PropTypes.array.isRequired,
};
