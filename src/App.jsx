// import "./index.css";
import GradeSubmission from "./Pages/Teacher/Assignments/GradeSubmission";
import AssignmentList from "./Pages/Teacher/Assignments/AssignmentList";
import CreateAssignment from "./Pages/Teacher/Assignments/CreateAssignment";
import EditAssignment from "./Pages/Teacher/Assignments/EditAssignment";
import AssignmentSubmission from "./Pages/Teacher/Assignments/AssignmentSubmissions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Config/muiTheme";

// components;
import Layout from "./Components/Common/Layout";
import AttendanceLayout from "./Components/Teacher/Attendance/AttendanceLayout";
import CalendarView from "./Pages/Teacher/Attendance/CalendarView";
import Summary from "./Pages/Teacher/Attendance/Summary";
import PostAttendance from "./Pages/Teacher/Attendance/PostAttendance";
import Announcements from "./Pages/Teacher/Announcements/Announcements";
import Discover from "./Pages/Teacher/Discover/Discover";
import Schedule from "./Pages/Teacher/Schedule/Schedule";
import MyCourses from "./Pages/Teacher/Courses/MyCourses";
// import ColorPalettePage from "./ColorUsage/ColorPalettePage";
import CourseDetailsLayout from "./Components/Common/CourseDetailsLayout";
// import EditAssignment from "./Pages/Teacher/Assignments/EditAssignment";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<MyCourses />} />
            <Route
              path="/course-details/:courseName"
              element={<CourseDetailsLayout />}
            >
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
                  path=":assignmentId/submissions/:submissionId/grade"
                  element={<GradeSubmission />}
                />
              </Route>
            </Route>
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/colorpalette" element={<CreateAssignment />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
