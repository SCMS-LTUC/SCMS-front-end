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
import logo from "./../../Assets/Images/logo-fusion.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";

const Navbar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="bg-neutral-surface text-primary p-4 flex  justify-between border-b-2 border-neutral-border !shadow-sm !shadow-neutral-border">
      {/* Left: Site logo */}
      <div className="flex items-center space-x-3">
        <div>
          {/* handle toggle sidebar */}
          <IconButton
            className=" hover:!bg-neutral-background !text-neutral-textMedium"
            onClick={toggleSidebar}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            {isOpen ? <MenuOpenOutlinedIcon /> : <MenuOutlinedIcon />}
            {/* <MenuOutlinedIcon className="text-primary" /> */}
          </IconButton>
        </div>
        <img src={logo} alt="Fusion Learn Logo" className="h-14" />
      </div>

      {/* Right: Icons for actions */}
      <div className="flex items-center space-x-4">
        <IconButton className=" hover:!bg-neutral-background">
          <ChatOutlinedIcon className="text-primary" />
        </IconButton>
        <IconButton className=" hover:!bg-neutral-background">
          <NotificationsActiveOutlinedIcon className="text-primary" />
        </IconButton>
        <IconButton className=" hover:!bg-neutral-background">
          <AccountCircleOutlinedIcon className="text-primary" />
        </IconButton>
        <IconButton className=" hover:!bg-neutral-background">
          <LogoutOutlinedIcon className="text-primary" />
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