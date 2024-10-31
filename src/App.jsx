import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Config/muiTheme";

//components
import AttendanceLayout from "./Components/Teacher/Attendance/AttendanceLayout";
import CalendarView from "./Pages/Teacher/Attendance/CalendarView";
import Summary from "./Pages/Teacher/Attendance/Summary";
import PostAttendance from "./Pages/Teacher/Attendance/PostAttendance";

export default function App() {
  return (
    <Router>
      <div className="!bg-neutral-background !w-screen !min-h-screen">
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="attendance" element={<AttendanceLayout />}>
              <Route index element={<CalendarView />} />
              <Route path="summary" element={<Summary />} />
            </Route>
            <Route path="attendance/post" element={<PostAttendance />} />
          </Routes>
        </ThemeProvider>
      </div>
    </Router>
  );
}
