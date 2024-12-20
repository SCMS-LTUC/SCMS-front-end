import { Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
//menu items
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
//components
import Layout from "../../Components/Common/Layout";
import AdminAnnouncements from "./AdminAnnouncements/AnnouncementsList";
import CourseAnnouncements from "./CourseAnnouncements/AnnouncementsList";
import Schedule from "./Schedule/Schedule";
import CoursesLayout from "../../Components/Student/Courses/CoursesLayout";
import CurrentCourses from "./Courses/CurrentCourses";
import CompletedCourses from "./Courses/CompletedCourses";
import CourseDetailsLayout from "../../Components/Student/Courses/CourseDetailsLayout";
// import StudentQuizzes from "./Quizzes/StudentQuizzes";
import QuizInstruction from "./Quizzes/QuizInstructions";
import QuizList from "./Quizzes/QuizList";
import TakeQuiz from "./Quizzes/TakeQuiz";
import ViewResults from "./Quizzes/ViewResults";
import AssignmentList from "./Assignments/AssignmentList";
import ViewSubmission from "./Assignments/ViewSubmission";
import SubmitAssignment from "./Assignments/SubmitAssignment";
import Classlist from "../Student/Classlist/Classlist";
import AttendancePage from "./Attendance/AttendanePage";
import Grades from "./Grades/Grades";
import DiscoverPage from "./Discover/DiscoverPage";
// data example
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
  // const location = useLocation();
  // const [value, setValue] = useState(false);
  // useEffect(() => {
  //   // Perform some logic when the route changes
  //   console.log("Route changed to", location.pathname);
  //   setValue(!value);
  // }, [location.pathname]);
  return (
    <Layout menuItems={menuItems}>
      <Routes>
        <Route path="announcements" element={<AdminAnnouncements />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="/" element={<CoursesLayout />}>
          <Route index element={<CurrentCourses />} />
          <Route path="/completed" element={<CompletedCourses />} />
        </Route>
        <Route path="discover" element={<DiscoverPage />} />
        <Route
          path="/course-details/:courseId"
          element={<CourseDetailsLayout />}
        >
          <Route path="announcements" element={<CourseAnnouncements />} />
          <Route path="quizzes">
            <Route index element={<QuizList />} />
            <Route
              path="quiz-instruction/:quizId"
              element={<QuizInstruction />}
            />
            <Route path="take-quiz/:quizId" element={<TakeQuiz />} />
            <Route path="view-results/:quizId" element={<ViewResults />} />
          </Route>
          <Route path="assignments">
            <Route index element={<AssignmentList />} />
            <Route
              path=":assignmentId/view-submission/:studentAssignmentId"
              element={<ViewSubmission />}
            />
            <Route
              path="submit-assignment/:assignmentId"
              element={<SubmitAssignment />}
            />
          </Route>
          <Route path="classlist" element={<Classlist />} />
          <Route path="attendance" element={<AttendancePage />} />
          <Route path="grades" element={<Grades />} />
        </Route>
      </Routes>
    </Layout>
  );
}
