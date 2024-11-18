import { useState } from "react";
import { TablePagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoCard from "../../../Components/Teacher/Courses/CourseCard.jsx";
import { useAllCourses } from "../../../Logic/Teacher/useAllCourses.jsx";
const MyCourses = () => {
  const navigate = useNavigate();

  const { teacherCourses, status, error } = useAllCourses();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    if (error === "Request failed with status code 401") {
      navigate("/login");
    }
    return <div>{error}</div>;
  }

  const navigateToCourse = (path) => navigate(path);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="p-6">
      <div className="container !w-4/6 mx-auto space-y-8">
        {teacherCourses
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((course, index) => (
            <InfoCard
              courseId={course.courseId}
              key={index}
              courseName={course.className}
              teacher={course.teacherName}
              progress={course.progress || 0}
              classroom={course.classroomNumber}
              startTime={course.startTime}
              endTime={course.endTime}
              days={course.days}
              startDate={course.startDate}
              endDate={course.endDate}
              onNavigate={() => navigateToCourse(`/courses/${course.courseId}`)}
            />
          ))}
      </div>
      <TablePagination
        component="div"
        count={teacherCourses.length}
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
