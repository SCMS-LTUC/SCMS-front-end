import { useState } from "react";
import { TablePagination } from "@mui/material";
import InfoCard from "../../../Components/Student/Courses/CompletedCourseCard";
// make sure to filter this to the completed courses only
// import { studentCourses } from "../../../Logic/Student/Data.jsx";
import { usePreviousStudentCourses } from "../../../Logic/Student/useAllCourses.js";
const MyCourses = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { previousCourses } = usePreviousStudentCourses();
  console.log(previousCourses);

  const downloadFile = async (certificateId, courseName) => {
    try {
      console.log("this is the courseName", courseName);
      // Replace with your actual backend URL and the student's assignment ID
      const response = await fetch(
        `http://localhost:5128/api/Certificates/download/${certificateId}`,
        {
          method: "GET",
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("this is the file response", response);

      // Create a Blob from the response data
      const fileBlob = await response.blob();

      // Create an object URL for the Blob and trigger the download
      const downloadUrl = window.URL.createObjectURL(fileBlob);
      const link = document.createElement("a");
      link.href = downloadUrl;

      // Check if the content-disposition header is present
      const contentDisposition = response.headers.get("content-disposition");
      let fileName = courseName?.split(" ").join("-") + "-Certificate" + ".pdf";
      if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(
          /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
        );
        if (fileNameMatch != null && fileNameMatch[1]) {
          fileName = fileNameMatch[1].replace(/['"]/g, "");
        }
      }
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  function handleDownload(certificateId, courseName) {
    downloadFile(certificateId, courseName);
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
          {previousCourses
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
                handleDownload={() => {
                  handleDownload(course.certificateId, course.className);
                }}
              />
            ))}
        </div>
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
