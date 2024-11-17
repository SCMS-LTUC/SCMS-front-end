import { useState } from "react";
import { TablePagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoCard from "../../../Components/Student/Courses/CurrentCourseCard.jsx";

// data
import { currentCourses } from "../../../Logic/Student/Data.jsx";
const MyCourses = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const navigateToCourse = (path) => navigate(path);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <div className="container !w-3/5 !mx-auto space-y-8">
        {currentCourses
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((course, index) => (
            <InfoCard
              courseId={course.courseId}
              key={index}
              courseName={course.courseName}
              teacher={course.teacher}
              classroom={course.classroom}
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
        count={currentCourses.length}
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
