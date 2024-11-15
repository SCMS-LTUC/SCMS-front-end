import {
  Typography,
  Divider,
  //   TablePagination,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
// import ClasslistCard from "../../../Components/Teacher/Classlist/ClasslistCard";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GradesTable from "../../../Components/Teacher/Grade/GradesTable";
const students = [
  {
    studentId: 1,
    studentName: "John Doe",
    averageGrades: "80",
  },
  {
    studentId: 2,
    studentName: "Dima Salem",
    studentUserName: "DimaSalem",
    averageGrades: "90",
  },
  {
    studentId: 3,
    studentName: "Leen Yasir",
    averageGrades: "70",
  },
];

export default function Classlist() {
  const [searchQuery, setSearchQuery] = useState("");

  // Search handler
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter students based on search query
  const filteredStudents = students.filter((student) =>
    student.studentName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-between !p-8">
      <div className="container space-y-6 !mx-auto">
        <div className="flex justify-between">
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
            <GradesTable students={filteredStudents} />
          </div>
        </div>
        <Divider className="!my-4" />
      </div>
    </div>
  );
}
