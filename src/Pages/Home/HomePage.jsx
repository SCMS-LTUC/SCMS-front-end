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
} from "../../Components/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";

const HomePage = () => {
  return (
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
      {/* <Route
        path="/courses"
        element={
          <div className="overflow-hidden">
            <Navbar />
            <h1 className="text-3xl font-bold text-center text-secondary bg-gray-100 p-4 rounded-lg shadow-md">
              Here put the courses component that made in Student Dashboard
            </h1>
          </div>
        }
      /> */}
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
    </Routes>
  );
};

export default HomePage;
