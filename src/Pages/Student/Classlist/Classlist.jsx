import {
  Typography,
  Divider,
  TablePagination,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import ClasslistCard from "../../../Components/Teacher/Classlist/ClasslistCard";
import TeacherCard from "../../../Components/Student/Classlist/TeacherCard";
import SearchIcon from "@mui/icons-material/Search";
import { students, currentCourse } from "../../../Logic/Student/Data";
//import { useParams } from "react-router-dom";
//import { useClassList } from "../../../Logic/Teacher/useClassList";

export default function Classlist() {
  //  const { courseId } = useParams();
  //  const { students } = useClassList(courseId);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  // Search handler
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setPage(0); // Reset to first page when searching
  };

  // Filter students and teacher based on search query
  const filteredStudents = students.filter((student) =>
    student.studentName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isTeacherMatch = currentCourse.teacherName
    .toLowerCase()
    .includes(searchQuery.toLowerCase());

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="flex flex-col justify-between !p-8">
      <div className="container space-y-6 !mx-auto">
        <div className="flex space-x-16">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Class List
          </Typography>
          <TextField
            placeholder="Search"
            variant="outlined"
            type="search"
            size="small"
            value={searchQuery}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="text-neutral-textSecondary" />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Divider className="!my-4" />
        <div>
          <div className="flex flex-col justify-start space-y-2">
            {isTeacherMatch && (
              <TeacherCard
                teacherName={currentCourse.teacherName}
                teacherId={currentCourse.teacherId}
                teacherDepartment={currentCourse.teacherDepartment}
              />
            )}
            {filteredStudents
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((student, index) => (
                <ClasslistCard key={index} student={student} />
              ))}
          </div>
        </div>
        <Divider className="!my-4" />
        <TablePagination
          component="div"
          count={filteredStudents.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          className="!text-neutral-textPrimary"
        />
      </div>
    </div>
  );
}
