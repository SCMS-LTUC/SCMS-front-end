import { useState } from "react";
import { TablePagination } from "@mui/material";
import InfoCard from "../../../Components/Student/Courses/CompletedCourseCard";
// make sure to filter this to the completed courses only
import { studentCourses } from "../../../Logic/Student/Data.jsx";
const MyCourses = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { previousCourses } = usePreviousStudentCourses();
  console.log(previousCourses);

  function handleDownload(certificateId) {
    console.log(`Downloading certificate for course ${certificateId}`);
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <div className="container  !mx-auto space-y-8 !min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {studentCourses.$values
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((course, index) => (
              <InfoCard
                courseId={course.courseId}
                key={index}
                courseName={course.className}
                // description={course.description}
                teacher={course.teacher}
                classroom={course.classroom}
                startDate={course.startDate}
                endDate={course.endDate}
                numberOfHours={course.numberOfHours}
                certificateId={course.certificateId}
                averagedGrade={course.averageGrades}
                handleDownload={handleDownload}
              />
            ))}
        </div>
      </div>
      <TablePagination
        component="div"
        count={studentCourses.$values.length}
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
