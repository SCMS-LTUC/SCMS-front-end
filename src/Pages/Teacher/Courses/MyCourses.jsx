import { useNavigate } from "react-router-dom";
import InfoCard from "../../../Components/Teacher/Courses/CourseCard.jsx";
// import { Box } from "@mui/material";
const MyCourses = () => {
  const navigate = useNavigate();

  const navigateToCourse = (path) => navigate(path);

  const inProgressCourses = [
    {
      courseId: "1",
      courseName: "Introduction to Web Development",
      teacher: "Dr. Ahmad Samhan",
      progress: 50,
      // date: "October 29, 2024",
      classroom: "Room 101",
      startTime: "9:00",
      endTime: "10:00",
      days: ["Sun", "Tue"],
    },
    {
      courseId: "1",
      courseName: "Advanced React",
      teacher: "Dr. Omar Zain",
      progress: 85,
      // date: "November 3, 2024",
      classroom: "Room 202",
      startTime: "8:00",
      endTime: "9:00",
      days: ["Mon, Wed"],
    },
  ];

  return (
    <div className="p-6">
      {/* <h1 className="text-3xl font-bold mb-4 text-primary">My Courses</h1> */}

      <div className="container !w-4/6 mx-auto space-y-8">
        {inProgressCourses.map((course, index) => (
          <InfoCard
            courseId={course.courseId}
            key={index}
            courseName={course.courseName}
            teacher={course.teacher}
            progress={course.progress}
            date={course.date}
            classroom={course.classroom}
            startTime={course.startTime}
            endTime={course.endTime}
            days={course.days}
            onNavigate={() =>
              navigateToCourse(
                `/courses/${course.courseName.toLowerCase().replace(/ /g, "-")}`
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
