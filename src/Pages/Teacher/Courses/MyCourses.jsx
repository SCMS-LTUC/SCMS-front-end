// import { useNavigate } from "react-router-dom";
// import InfoCard from "../../../Components/Teacher/Courses/CourseCard.jsx";
// // import { Box } from "@mui/material";
// const MyCourses = () => {
//   const navigate = useNavigate();

//   const navigateToCourse = (path) => navigate(path);

//   return (
//     <div className="p-6">
//       {/* <h1 className="text-3xl font-bold mb-4 text-primary">My Courses</h1> */}

//       <div className="container !w-4/6 mx-auto space-y-8">
//         {inProgressCourses.map((course, index) => (
//           <InfoCard
//             courseId={course.courseId}
//             key={index}
//             courseName={course.courseName}
//             teacher={course.teacher}
//             progress={course.progress}
//             date={course.date}
//             classroom={course.classroom}
//             startTime={course.startTime}
//             endTime={course.endTime}
//             days={course.days}
//             onNavigate={() =>
//               navigateToCourse(
//                 `/courses/${course.courseName.toLowerCase().replace(/ /g, "-")}`
//               )
//             }
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyCourses;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeacherCourses } from "../../../Redux/coursesSlice.js";
import { useState } from "react";
import { TablePagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InfoCard from "../../../Components/Teacher/Courses/CourseCard.jsx";

const MyCourses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { teacherCourses, status, error } = useSelector(
    (state) => state.courses
  );
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTeacherCourses());
    }
  }, [status, dispatch]);

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
