import { Routes, Route } from "react-router-dom";
import Layout from "../../Components/Common/Layout";
import GradeSubmission from "../Teacher/Assignments/GradeSubmission";
import AssignmentList from "../Teacher/Assignments/AssignmentList";
import CreateAssignment from "../Teacher/Assignments/CreateAssignment";
import EditAssignment from "../Teacher/Assignments/EditAssignment";
import AssignmentSubmission from "../Teacher/Assignments/AssignmentSubmissions";
import AttendanceLayout from "../../Components/Teacher/Attendance/AttendanceLayout";
import CalendarView from "../Teacher/Attendance/CalendarView";
import Summary from "../Teacher/Attendance/Summary";
import PostAttendance from "../Teacher/Attendance/PostAttendance";
import Announcements from "./AdminAnnouncements/AnnouncementList";
import Discover from "../Teacher/Discover/Discover";
import Schedule from "../Teacher/Schedule/Schedule";
import MyCourses from "../Teacher/Courses/MyCourses";
// import ColorPalettePage from "../ColorUsage/ColorPalettePage";
import CourseDetailsLayout from "../../Components/Common/CourseDetailsLayout";
import CourseAnnouncements from "./CourseAnnouncements/AnnouncementList";
import MainNotification from "../../../temp/MainNotification";
import CourseQuizzes from "./Quizzes/QuizList";
import ViewSubmissions from "./Quizzes/ViewSubmissions";
import EditQuiz from "./Quizzes/EditQuiz";
import CreateQuiz from "./Quizzes/CreateQuiz";
import Classlist from "./Classlist/Classlist";
//menu items icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";

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
    text: "Schedule",
    icon: <CalendarMonthIcon />,
    path: "/schedule",
  },
];

export default function Main() {
  return (
    <Layout menuItems={menuItems}>
      <Routes>
        <Route path="/" element={<MyCourses />} />
        <Route
          path="/course-details/:courseId"
          element={<CourseDetailsLayout />}
        >
          <Route path="announcements" element={<CourseAnnouncements />} />
          <Route path="attendance" element={<AttendanceLayout />}>
            <Route index element={<CalendarView />} />
            <Route path="summary" element={<Summary />} />
            <Route path=":lectureId/post" element={<PostAttendance />} />
          </Route>
          <Route path="assignments">
            <Route index element={<AssignmentList />} />
            <Route path="create" element={<CreateAssignment />} />
            <Route path=":assignmentId/edit" element={<EditAssignment />} />
            <Route
              path=":assignmentId/submissions"
              element={<AssignmentSubmission />}
            />
            <Route
              path=":assignmentId/submissions/:submissionId/"
              element={<GradeSubmission />}
            />
          </Route>
          <Route path="quizzes">
            <Route index element={<CourseQuizzes />} />
            <Route
              path=":quizId/view-submissions"
              element={<ViewSubmissions />}
            />
            <Route path=":quizId/edit-quiz" element={<EditQuiz />} />
            <Route path="create-quiz" element={<CreateQuiz />} />
          </Route>
          <Route path="classlist" element={<Classlist />} />
        </Route>
        
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/colorpalette" element={<MainNotification />} />
      </Routes>
    </Layout>
  );
}
