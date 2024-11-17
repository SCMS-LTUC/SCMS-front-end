import { useState } from "react";
import { TablePagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoCard from "../../../Components/Teacher/Courses/CourseCard.jsx";

const MyCourses = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const navigateToCourse = (path) => navigate(path);

  const inProgressCourses = [
    {
      courseId: "1",
      courseName: "Introduction to Web Development",
      teacher: "Dr. Ahmad Samhan",
      progress: 50,
      classroom: "Room 101",
      startTime: "9:00",
      endTime: "10:00",
      days: ["Sun", "Tue"],
    },
    {
      courseId: "2",
      courseName: "Advanced React",
      teacher: "Dr. Omar Zain",
      progress: 85,
      classroom: "Room 202",
      startTime: "8:00",
      endTime: "9:00",
      days: ["Mon", "Wed"],
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="">
      <div className="container !w-3/5 mx-auto space-y-8">
        {inProgressCourses
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((course, index) => (
            <InfoCard
              courseId={course.courseId}
              key={index}
              courseName={course.courseName}
              teacher={course.teacher}
              progress={course.progress}
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
      <TablePagination
        component="div"
        count={inProgressCourses.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        className="!text-neutral-textPrimary"
      />
    </div>
  );
};

export default MyCourses;
