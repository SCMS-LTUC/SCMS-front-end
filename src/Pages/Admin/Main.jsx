// import { Routes, Route } from "react-router-dom";
import Layout from "../../Components/Common/Layout";

//menu items
import CampaignIcon from "@mui/icons-material/Campaign";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import CategoryIcon from "@mui/icons-material/Category";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import PaymentIcon from "@mui/icons-material/Payment";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
const menuItems = [
  {
    text: "Announcements",
    icon: <CampaignIcon />,
    path: "/",
  },
  {
    text: "Courses",
    icon: <CollectionsBookmarkIcon />,
    path: "/courses",
  },
  {
    text: "Categories",
    icon: <CategoryIcon />,
    path: "/categories",
  },
  {
    text: "Subjects",
    icon: <MenuBookIcon />,
    path: "/subjects",
  },
  {
    text: "Classrooms",
    icon: <MeetingRoomIcon />,
    path: "/classrooms",
  },
  {
    text: "Teachers",
    icon: <PeopleIcon />,
    path: "/teachers",
  },
  {
    text: "Students",
    icon: <SchoolIcon />,
    path: "/students",
  },
  {
    text: "Payments",
    icon: <PaymentIcon />,
    path: "/payments",
  },
  {
    text: "Report",
    icon: <BarChartIcon />,
    path: "/report",
  },
  {
    text: "Messages",
    icon: <EmailIcon />,
    path: "/messages",
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
];
export default function Main() {
  return <Layout menuItems={menuItems}></Layout>;
}
