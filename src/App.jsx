import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Provider, useSelector } from "react-redux";
import theme from "./Config/muiTheme";
import Teacher from "./Pages/Teacher/Main";
import Student from "./Pages/Student/Main";
import Admin from "./Pages/Admin/Main";
import HomePage from "./Pages/Home/HomePage";
// For carousel in courses and feedback section in Home page
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// const role = "publicUser";
// const renderComponents = (role) => {
// import Login from "./Pages/Login/Login"; // Import Login component
import ProtectedRoute from "./Components/Common/ProtectedRoute";
import store from "./Redux/Store"; // Import your Redux store

// public pages
import {
  Achievement,
  Categories,
  Companies,
  Courses,
  CTA,
  Footer,
  Hero,
  Feedback,
  Navbar,
} from "./Components/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ContactUs from "./Pages/Home/ContactUs";
import AboutUs from "./Pages/Home/AboutUs";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="overflow-hidden">
                  <Navbar />
                  <Hero />
                  <Companies />
                  <Courses />
                  <Achievement />
                  <Categories />
                  <Feedback />
                  <CTA />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/courses"
              element={
                <div className="overflow-hidden">
                  <Navbar />
                  {/* Here put the courses component that made in Student page  */}
                  <h1 className="text-3xl font-bold text-center text-[#20B486] bg-gray-100 p-4 rounded-lg shadow-md">
                    Here put the courses component that made in Student
                    Dashboard
                  </h1>
                </div>
              }
            />
            <Route
              path="/login"
              element={
                <div className="overflow-hidden">
                  <Navbar />
                  <Login />
                </div>
              }
            />
            <Route
              path="/signup"
              element={
                <div className="overflow-hidden">
                  <Navbar />
                  <Signup />
                </div>
              }
            />
            <Route
              path="/contact-us"
              element={
                <div className="overflow-hidden">
                  <Navbar />
                  <ContactUs />
                </div>
              }
            />
            <Route
              path="/about-us"
              element={
                <div className="overflow-hidden">
                  <Navbar />
                  <AboutUs />
                  <Footer />
                </div>
              }
            />
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
    case "publicUser":
      return <HomePage />;
    default:
      return null;
  }
};

export default App;
