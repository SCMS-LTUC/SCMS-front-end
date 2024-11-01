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
import ColorPalettePage from "./ColorUsage/ColorPalettePage";
import CourseDetailsLayout from "./Components/Common/CourseDetailsLayout";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <div className="p-6 flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<MyCourses />} />
              <Route
                path="/course-details/:courseName"
                element={<CourseDetailsLayout />}
              >
                <Route path="attendance" element={<AttendanceLayout />}>
                  <Route index element={<CalendarView />} />
                  <Route path="summary" element={<Summary />} />
                </Route>
                <Route
                  path="attendance/:lectureId/post"
                  element={<PostAttendance />}
                />
              </Route>
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/colorpalette" element={<ColorPalettePage />} />
            </Routes>
          </div>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
