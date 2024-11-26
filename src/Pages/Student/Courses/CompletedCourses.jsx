import { useState } from "react";
import { TablePagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoCard from "../../../Components/Student/Courses/CompletedCourseCard";
//import { completedCourses } from "../../../Logic/Student/Data.jsx";
import { usePreviousStudentCourses } from "../../../Logic/Student/useAllCourses.js";

const MyCourses = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const {previousCourses} = usePreviousStudentCourses();
  console.log(previousCourses);

  const navigateToCourse = (path) => navigate(path);

  const calcualteNumberOfHours = (startTime, endTime) => {
    const [startHours, startMinutes] = startTime.split(":");
    const [endHours, endMinutes] = endTime.split(":");
    const start = parseInt(startHours) * 60 + parseInt(startMinutes);
    const end = parseInt(endHours) * 60 + parseInt(endMinutes);
    const difference = end - start;
    return (difference / 60) * 2;
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
      <div className="container !w-3/5 mx-auto space-y-8">
        {previousCourses
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((course, index) => (
            <InfoCard
              courseId={course.courseId}
              key={index}
              courseName={course.courseName}
              description={course.description}
              teacher={course.teacherName}
              classroom={course.classroom}
              startDate={course.startDate}
              endDate={course.endDate}
              numberOfHours={calcualteNumberOfHours(course.startTime, course.endTime)}
              certificateId={course.certificateId}
              averagedGrade={course.grade}
              onNavigate={() => navigateToCourse(`/courses/${course.courseId}`)}
            />
          ))}
      </div>
      <TablePagination
        component="div"
        count={previousCourses.length}
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
