import { Routes, Route } from "react-router-dom";
//menu items
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
//components
import Layout from "../../Components/Common/Layout";
import AdminAnnouncements from "../Teacher/AdminAnnouncements/AnnouncementList";
import Schedule from "../Teacher/Schedule/Schedule";
import CoursesLayout from "../../Components/Student/Courses/CoursesLayout";
import CurrentCourses from "./Courses/CurrentCourses";
import CompletedCourses from "./Courses/CompletedCourses";
// data
import { announcements, scheduleCourses } from "../../Logic/Student/Data";
const menuItems = [
  {
    text: "My Courses",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    text: "Announcements",
    icon: <CampaignIcon />,
    path: "/announcements",
  },
  {
    text: "Discover",
    icon: <AutoStoriesIcon />,
    path: "/discover",
  },
  {
    text: "Schedule",
    icon: <CalendarMonthIcon />,
    path: "/schedule",
  },
];
export default function Main() {
  return (
    <Layout menuItems={menuItems}>
      <Routes>
        <Route
          path="announcements"
          element={<AdminAnnouncements announcements={announcements} />}
        />
        <Route
          path="schedule"
          element={<Schedule scheduleCourses={scheduleCourses} />}
        />
        <Route path="/" element={<CoursesLayout />}>
          <Route index element={<CurrentCourses />} />
          <Route path="/completed" element={<CompletedCourses />} />
        </Route>
      </Routes>
    </Layout>
  );
}
