import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Config/muiTheme";

//components
import AttendanceLayout from "./Components/Teacher/Attendance/AttendanceLayout";
import CalendarView from "./Pages/Teacher/Attendance/CalendarView";
import Summary from "./Pages/Teacher/Attendance/Summary";
import PostAttendance from "./Pages/Teacher/Attendance/PostAttendance";
import Sidebar from "./Components/Common/Sidebar";
import Navbar from "./Components/Common/Navbar";
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
        <div className="flex h-screen !bg-neutral-background ">
          {/* Sidebar on the left */}
          <Sidebar />

          {/* Main content area */}
          <div className="flex-1 flex flex-col">
            <Navbar /> {/* Add the Navbar here */}
            <div className="p-6 flex-1 overflow-auto">
              <Routes>
                <Route path="/" element={<MyCourses />} />
                <Route
                  path="/course-details/:courseId"
                  element={<CourseDetailsLayout />}
                >
                  <Route path="attendance" element={<AttendanceLayout />}>
                    <Route index element={<CalendarView />} />
                    <Route path="summary" element={<Summary />} />
                    <Route
                      path="attendance/:lectureId/post"
                      element={<PostAttendance />}
                    />
                  </Route>
                </Route>
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/colorpalette" element={<ColorPalettePage />} />
              </Routes>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
