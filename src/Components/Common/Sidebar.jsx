// import PropTypes from "prop-types";
// import { Link, useLocation } from "react-router-dom";
// // import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
// // import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
// // import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
// import {
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import {
//   LibraryBooks as CoursesIcon,
//   Announcement as AnnouncementsIcon,
//   Event as ScheduleIcon,
// } from "@mui/icons-material";

// const Sidebar = ({ isOpen }) => {
//   const location = useLocation();

//   const menuItems = [
//     {
//       text: "My Courses",
//       icon: <CoursesIcon />,
//       path: "/",
//     },
//     {
//       text: "Announcements",
//       icon: <AnnouncementsIcon />,
//       path: "/announcements",
//     },
//     {
//       text: "Schedule",
//       icon: <ScheduleIcon />,
//       path: "/schedule",
//     },
//   ];

//   return (
//     <div
//       className={`h-screen bg-neutral-surface transition-all duration-300 ${isOpen ? "w-64" : "w-16"} border-r-2 border-neutral-border`}
//     >
//       <List>
//         {menuItems.map((item) => (
//           <Link
//             key={item.text}
//             to={item.path}
//             className="no-underline text-inherit"
//           >
//             <ListItem disablePadding>
//               <ListItemButton
//                 className={` hover:!bg-neutral-background transition-all duration-700 !pl-2.5 !m-2 !rounded-lg ${location.pathname === item.path ? "!bg-neutral-background hover:!bg-neutral-darkerBackground" : ""}`}
//               >
//                 <ListItemIcon
//                   className={`transition-transform duration-300 ease-in-out ${
//                     isOpen ? "scale-100" : "scale-90"
//                   } !text-neutral-textMedium ${
//                     location.pathname === item.path ? "!text-primary-dark" : ""
//                   }`}
//                   style={{
//                     transformOrigin: "center", // scale from center
//                   }}
//                 >
//                   {item.icon}
//                 </ListItemIcon>
//                 {/* <ListItemIcon
//                   className={`!text-neutral-textMedium ${location.pathname === item.path ? "!text-primary-dark " : ""}`}
//                 >
//                   {item.icon}
//                 </ListItemIcon> */}
//                 {/* {isOpen && (
//                   <ListItemText
//                     primary={item.text}
//                     className={`!text-neutral-textMedium ${location.pathname === item.path ? "!text-primary-dark " : ""}`}
//                   />
//                 )} */}
//                 <ListItemText
//                   primary={item.text}
//                   className={`transition-opacity duration-300 ease-in-out delay-200 ${
//                     isOpen ? "opacity-100" : "opacity-0"
//                   } !text-neutral-textMedium ${
//                     location.pathname === item.path ? "!text-primary-dark" : ""
//                   }`}
//                   style={{
//                     display: isOpen ? "block" : "none",
//                   }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           </Link>
//         ))}
//       </List>
//     </div>
//   );
// };
// Sidebar.propTypes = {
//   isOpen: PropTypes.bool.isRequired, // Boolean prop, required
// };
// export default Sidebar;

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
import {
  LibraryBooks as CoursesIcon,
  Announcement as AnnouncementsIcon,
  Event as ScheduleIcon,
} from "@mui/icons-material";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();

  const menuItems = [
    {
      text: "My Courses",
      icon: <CoursesIcon />,
      path: "/",
    },
    {
      text: "Announcements",
      icon: <AnnouncementsIcon />,
      path: "/announcements",
    },
    {
      text: "Schedule",
      icon: <ScheduleIcon />,
      path: "/schedule",
    },
  ];

  return (
    <div
      style={{
        width: isOpen ? 300 : 64, // Smooth width transition
        minWidth: 64, // Prevents the sidebar from shrinking to 0
        transition: "width 0.4s ease", // Adjust transition duration as needed
      }}
      className="h-screen bg-neutral-surface border-r-2 border-neutral-border !shadow-lg !shadow-neutral-border"
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
                className={`hover:!bg-neutral-background transition-all duration-300 !pl-2.5 !m-2 !rounded-lg ${
                  location.pathname === item.path
                    ? "!bg-neutral-background hover:!bg-neutral-darkerBackground"
                    : ""
                }`}
              >
                <ListItemIcon
                  className={`transition-transform duration-300 delay-100 ${
                    isOpen ? "scale-100" : "scale-90"
                  } !text-neutral-textMedium ${
                    location.pathname === item.path ? "!text-primary-dark" : ""
                  }`}
                  style={{
                    transformOrigin: "center",
                  }}
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
};

export default Sidebar;
