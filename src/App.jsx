import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Common/Sidebar';
import Navbar from './Components/Common/Navbar';
import Announcements from './Pages/Teacher/Announcements/Announcements';
import Discover from './Pages/Teacher/Discover/Discover';
import Schedule from './Pages/Teacher/Schedule/Schedule';
import MyCourses from './Pages/Teacher/Courses/MyCourses';

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
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/schedule" element={<Schedule />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
