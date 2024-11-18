import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
//menu items
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
//components
import Layout from "../../Components/Common/Layout";
import AdminAnnouncements from "./AdminAnnouncements/AnnouncementsList";
import Schedule from "./Schedule/Schedule";
import CoursesLayout from "../../Components/Student/Courses/CoursesLayout";
import CurrentCourses from "./Courses/CurrentCourses";
import CompletedCourses from "./Courses/CompletedCourses";
import CourseDetailsLayout from "../../Components/Student/Courses/CourseDetailsLayout";
// data example
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
  const location = useLocation();
  useEffect(() => {
    // Perform some logic when the route changes
    console.log("Route changed to", location.pathname);
  }, [location.pathname]);
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
        <Route
          path="/course-details/:courseId"
          element={<CourseDetailsLayout />}
        >
          <Route
            path="announcements"
            element={<AdminAnnouncements announcements={announcements} />}
          />
        </Route>
      </Routes>
    </Layout>
  );
}
