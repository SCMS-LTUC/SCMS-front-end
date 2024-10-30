import CalendarView from "./Pages/Teacher/Attendance/CalendarView";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Config/muiTheme";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-neutral-background">
        <CalendarView />
      </div>
    </ThemeProvider>
  );
}
