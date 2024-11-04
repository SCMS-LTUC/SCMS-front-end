import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Common/Sidebar";
import Navbar from "./Components/Common/Navbar";
import Announcements from "./Pages/Teacher/Announcements/Announcements";
import Discover from "./Pages/Teacher/Discover/Discover";
import Schedule from "./Pages/Teacher/Schedule/Schedule";
import MyCourses from "./Pages/Teacher/Courses/MyCourses";
import ColorPalettePage from "./ColorUsage/ColorPalettePage";
import CourseDetailsLayout from "./Components/Common/CourseDetailsLayout";
import CreateQuiz from "./Pages/Teacher/Quizes/CreateQuiz";
import CourseQuizzes from "./Pages/Teacher/Quizes/CourseQuizzes";
import EditQuiz from "./Pages/Teacher/Quizes/EditQuiz"; // Import EditQuiz
import ViewSubmissions from "./Pages/Teacher/Quizes/ViewSubmissions"; // Import ViewSubmissions

//new
import StudentQuizzes from "./Pages/Student/Quizes/StudentQuizzes";
import TakeQuiz from "./Pages/Student/Quizes/TakeQuiz";
const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          <Navbar /> {/* Add the Navbar here */}
          <div className="p-6 flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<MyCourses />} />
              <Route
                path="/course-details/:courseName"
                element={<CourseDetailsLayout />}
              />
              <Route path="/create-quiz" element={<CreateQuiz />} />
              <Route path="/quizzes" element={<CourseQuizzes />} />{" "}
              {/* Quizzes List */}
              <Route path="/edit-quiz/:quizId" element={<EditQuiz />} />{" "}
              {/* Edit Quiz */}
              <Route
                path="/view-submissions/:quizId"
                element={<ViewSubmissions />}
              />{" "}
              {/* View Submissions */}
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/colorpalette" element={<ColorPalettePage />} />
              <Route
                path="/student/:quizId/start-quiz"
                element={<TakeQuiz />}
              />
              <Route path="/student-quizzes" element={<StudentQuizzes />} />
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
