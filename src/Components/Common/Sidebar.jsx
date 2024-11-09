import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
// import {
//   LibraryBooks as CoursesIcon,
//   Announcement as AnnouncementsIcon,
//   Event as ScheduleIcon,
// } from "@mui/icons-material";

const Sidebar = ({ isOpen, menuItems }) => {
  const location = useLocation();

  return (
    <div
      style={{
        width: isOpen ? 300 : 64, // Smooth width transition
        minWidth: 64, // Prevents the sidebar from shrinking to 0
        transition: "width 0.4s ease", // Adjust transition duration as needed
      }}
      className="!h-full bg-neutral-surface border-r-2 border-neutral-border !shadow-lg !shadow-neutral-border"
    >
      <List>
        {menuItems.map((item) => (
          <Link
            key={item.text}
            to={item.path}
            className="no-underline text-inherit"
          >
            <ListItem disablePadding>
              <ListItemButton
                className={`hover:!bg-neutral-background transition-all duration-300 !p-2.5 !m-2 !rounded-lg ${
                  location.pathname === item.path
                    ? "!bg-neutral-background hover:!bg-neutral-darkerBackground"
                    : ""
                }`}
                // sx={{
                //   minWidth: "42px",
                //   display: "flex",
                //   justifyContent: "center",
                //   alignItems: "center",
                // }}
              >
                <ListItemIcon
                  className={`transition-transform duration-300 delay-100   !text-neutral-textMedium  ${
                    location.pathname === item.path ? "!text-primary-dark" : ""
                  }`}
                  style={{
                    transformOrigin: "center",
                  }}
                  sx={{ fontSize: "28px" }}
                >
                  {item.icon}
                </ListItemIcon>
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <ListItemText
                    primary={item.text}
                    className={`!text-neutral-textMedium ${
                      location.pathname === item.path
                        ? "!text-primary-dark"
                        : ""
                    }`}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        // letterSpacing: "0.02em",
                      },
                    }}
                  />
                </Collapse>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  menuItems: PropTypes.array.isRequired,
};

export default Sidebar;
