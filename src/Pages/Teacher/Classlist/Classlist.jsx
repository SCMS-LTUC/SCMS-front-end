import {
  Typography,
  Divider,
  TablePagination,
  InputAdornment,
  // Button,
} from "@mui/material";
import { useState } from "react";
import ClasslistCard from "../../../Components/Teacher/Classlist/ClasslistCard";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useClassList } from "../../../Logic/Teacher/useClassList";
import { useParams } from "react-router-dom";

// const students = [
//   {
//     studentId: 1,
//     studentName: "John Doe",
//     studentUserName: "johndoe",
//     studentEmail: "johndoe@gmail.com",
//   },
//   {
//     studentId: 2,
//     studentName: "Dima Salem",
//     studentUserName: "DimaSalem",
//     studentEmail: "johndoe@gmail.com",
//   },
//   {
//     studentId: 3,
//     studentName: "Leen Yasir",
//     studentUserName: "LeenYasir",
//     studentEmail: "LeenYasir@gmail.com",
//   },
// ];

export default function Classlist() {
  const { courseId } = useParams();
  const { students, status, error } = useClassList(courseId);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  // Search handler
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setPage(0); // Reset to first page when searching
  };

  // Filter students based on search query
  const filteredStudents = students.filter((student) =>
    student.studentName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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