import { useNavigate } from "react-router-dom";
import InfoCard from "../../../Components/Teacher/Courses/CourseCard.jsx";
import { Box } from "@mui/material";
const MyCourses = () => {
  const navigate = useNavigate();

  const navigateToCourse = (path) => navigate(path);

  const inProgressCourses = [
    {
      courseName: "Introduction to Web Development",
      teacher: "Dr. Ahmad Samhan",
      progress: 70,
      date: "October 29, 2024",
      classroom: "Room 101",
    },
    {
      courseName: "Advanced React",
      teacher: "Dr. Omar Zain",
      progress: 85,
      date: "November 3, 2024",
      classroom: "Room 202",
    },
  ];

  return (
    <div className="p-6">
      {/* <h1 className="text-3xl font-bold mb-4 text-primary">My Courses</h1> */}

      <Box>
        {inProgressCourses.map((course, index) => (
          <InfoCard
            key={index}
            courseName={course.courseName}
            teacher={course.teacher}
            progress={course.progress}
            date={course.date}
            classroom={course.classroom}
            onNavigate={() =>
              navigateToCourse(
                `/courses/${course.courseName.toLowerCase().replace(/ /g, "-")}`
              )
            }
          />
        ))}
      </Box>
    </div>
  );
};

export default MyCourses;
