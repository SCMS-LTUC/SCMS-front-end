import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Common/Login';
import LandingPage from './Components/Common/LandingPage';
import CourseDetailsLayout from './Components/Common/CourseDetailsLayout';
import ProtectedRoute from './Components/Common/ProtectedRoute';
// import GradeSubmission from "./Pages/Teacher/Assignments/GradeSubmission";
// import AssignmentList from "./Pages/Teacher/Assignments/AssignmentList";
// import CreateAssignment from "./Pages/Teacher/Assignments/CreateAssignment";
// import EditAssignment from "./Pages/Teacher/Assignments/EditAssignment";
// import AssignmentSubmission from "./Pages/Teacher/Assignments/AssignmentSubmissions";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Config/muiTheme";

// components;
import Layout from "./Components/Common/Layout";
// import AttendanceLayout from "./Components/Teacher/Attendance/AttendanceLayout";
// import CalendarView from "./Pages/Teacher/Attendance/CalendarView";
// import Summary from "./Pages/Teacher/Attendance/Summary";
// import PostAttendance from "./Pages/Teacher/Attendance/PostAttendance";
// import Announcements from "./Pages/Teacher/Announcements/Announcements";
// import Discover from "./Pages/Teacher/Discover/Discover";
// import Schedule from "./Pages/Teacher/Schedule/Schedule";
import MyCourses from "./Pages/Teacher/Courses/MyCourses";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <LandingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/course-details/:courseName/*"
              element={
                <ProtectedRoute>
                  <CourseDetailsLayout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/course-details"
              element={
                <ProtectedRoute>
                  <MyCourses />
                </ProtectedRoute>
              }
            />
            {/* Add other routes here */}
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
