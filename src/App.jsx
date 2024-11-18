import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Provider, useSelector } from "react-redux";
import theme from "./Config/muiTheme";
import Teacher from "./Pages/Teacher/Main";
import Student from "./Pages/Student/Main";
import Admin from "./Pages/Admin/Main";
import Login from "./Pages/Login/Login"; // Import Login component
import ProtectedRoute from "./Components/Common/ProtectedRoute";
import store from "./Redux/Store"; // Import your Redux store

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <RoleBasedComponent />
                </ProtectedRoute>
              }
            />
          </Routes>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

const RoleBasedComponent = () => {
  const role = useSelector((state) => state.user.role);

  switch (role) {
    case "Teacher":
      return <Teacher />;
    case "Student":
      return <Student />;
    case "Admin":
      return <Admin />;
    default:
      return null;
  }
};

export default App;
