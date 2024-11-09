import { IconButton } from "@mui/material";
import PropTypes from "prop-types";

// import {} from
//   Notifications as NotificationsIcon,
//   AccountCircle as ProfileIcon,
//   Message as MessageIcon,
//   Logout as LogoutIcon,
("@mui/icons-material");
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import logo from "./../../Assets/Images/no-back-80.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

const Navbar = ({ isOpen, toggleSidebar }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <div className="bg-neutral-surface text-primary p-4 flex  justify-between border-b-2 border-neutral-border !shadow-sm !shadow-neutral-border pl-2">
      {/* Left: Site logo */}
      <div className="flex items-center space-x-3">
        <div>
          {/* handle toggle sidebar */}
          <IconButton
            className=" hover:!bg-neutral-background  !text-neutral-textMedium !pl-2.5"
            onClick={toggleSidebar}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            {isOpen ? (
              <MenuOpenOutlinedIcon sx={{ fontSize: "28px" }} />
            ) : (
              <MenuOutlinedIcon sx={{ fontSize: "28px" }} />
            )}
            {/* <MenuOutlinedIcon className="text-primary" /> */}
          </IconButton>
        </div>
        <div className="flex items-center justify-between ">
          <img src={logo} alt="Fusion Learn Logo" className="h-14 !w-20" />
          <h1
            className="text-primary-dark !font-semibold text-3xl !font-poppins"
            style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          >
            Learnify
          </h1>
        </div>
      </div>

      {/* Right: Icons for actions */}
      <div className="flex items-center space-x-4">
        <IconButton className=" hover:!bg-neutral-background">
          <ChatOutlinedIcon className="text-neutral-textMedium hover:!text-primary" />
        </IconButton>
        <IconButton className=" hover:!bg-neutral-background ">
          <NotificationsActiveOutlinedIcon className="text-neutral-textMedium hover:!text-primary" />
        </IconButton>
        <IconButton className=" hover:!bg-neutral-background">
          <AccountCircleOutlinedIcon className="text-neutral-textMedium hover:!text-primary" />
        </IconButton>
        <IconButton className=" hover:!bg-neutral-background">
          <LogoutOutlinedIcon className="text-neutral-textMedium hover:!text-primary" onClick={handleLogout} />
        </IconButton>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Boolean prop, required
  toggleSidebar: PropTypes.func.isRequired, // Function prop, required
};
export default Navbar;
