import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Config/muiTheme";
import Teacher from "./Pages/Teacher/Main";
import Student from "./Pages/Student/Main";
import Admin from "./Pages/Admin/Main";

const role = "teacher";
const renderComponents = (role) => {
  switch (role) {
    case "teacher":
      return <Teacher />;
    case "student":
      return <Student />;
    case "admin":
      return <Admin />;
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
