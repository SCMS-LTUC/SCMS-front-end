import { useState } from "react";
import { TablePagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoCard from "../../../Components/Student/Courses/CurrentCourseCard.jsx";
import { useCurrentStudentCourses } from "../../../Logic/Student/useAllCourses.js";

// data
//import { currentCourses } from "../../../Logic/Student/Data.jsx";
const MyCourses = () => {
  const { currentCourses } = useCurrentStudentCourses();
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
    <div className="">
      <div className="container  !mx-auto space-y-8 !min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentCourses
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((course, index) => (
              <InfoCard
                courseId={course.courseId}
                key={index}
                courseName={course.className}
                teacher={course.teacherName}
                classroom={course.classroomNumber}
                startTime={course.startTime}
                endTime={course.endTime}
                days={course.days}
                startDate={course.startDate}
                endDate={course.endDate}
                onNavigate={() =>
                  navigateToCourse(
                    `/course-details/${course.courseId}/announcements`
                  )
                }
              />
            ))}
        </div>
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
