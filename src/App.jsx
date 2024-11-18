import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Config/muiTheme";
import Teacher from "./Pages/Teacher/Main";
import Student from "./Pages/Student/Main";
import Admin from "./Pages/Admin/Main";
import HomePage from "./Pages/Home/HomePage";
// For carousel in courses and feedback section in Home page 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const role = "publicUser";
const renderComponents = (role) => {
  switch (role) {
    case "teacher":
      return <Teacher />;
    case "student":
      return <Student />;
    case "admin":
      return <Admin />;
    case "publicUser":
      return <HomePage />;
    default:
      return;
  }
};
const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>{renderComponents(role)}</ThemeProvider>
    </Router>
  );
};

export default App;
