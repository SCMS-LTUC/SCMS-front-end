import { useState } from "react";
import { TablePagination } from "@mui/material";
import InfoCard from "../../../Components/Student/Discover/CourseCard.jsx";
// make sure to filter this to the completed courses only
import { notStartedCourses } from "../../../Logic/Student/Data.jsx";
const MyCourses = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleOnClickEnroll = (certificateId) => {
    console.log(certificateId);
  };
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
          {notStartedCourses.$values
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((course, index) => (
              <InfoCard
                key={index}
                courseId={course.courseId}
                courseName={course.className}
                teacher={course.teacherName}
                department={course.department}
                startDate={course.startDate}
                endDate={course.endDate}
                startTime={course.startTime}
                endTime={course.endTime}
                days={course.days.$values}
                description={course.description}
                level={course.level}
                capacity={course.capacity}
                numberOfEnrolledStudents={course.numberOfEnrolledStudents}
                price={course.price}
                numberOfHours={course.numberOfHours}
                handleOnClickEnroll={handleOnClickEnroll}
              />
            ))}
        </div>
      </div>
      <TablePagination
        component="div"
        count={notStartedCourses.$values.length}
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
