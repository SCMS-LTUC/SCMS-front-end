import { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const GradePage = () => {
  const [classAverage, setClassAverage] = useState(0);
  const [studentsAtRisk, setStudentsAtRisk] = useState([]);
  const [pendingGrades, setPendingGrades] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from API or use mock data
    const fetchedStudents = [
      { id: 1, name: "John Doe", grade: 85, status: "Pass" },
      { id: 2, name: "Jane Smith", grade: 58, status: "At Risk" },
      // Add more students
    ];
    setStudents(fetchedStudents);
    const average =
      fetchedStudents.reduce((acc, student) => acc + student.grade, 0) /
      fetchedStudents.length;
    setClassAverage(average);
    setStudentsAtRisk(
      fetchedStudents.filter((student) => student.grade < 60)
    );
    setPendingGrades(
      fetchedStudents.filter((student) => student.grade === null)
    );
  }, []);

  return (
    <Box className="p-6">
        <div className="mb-4">
            <Button
                variant="contained"
                color="primary"
            >
                Complete Grading
            </Button>
        </div>
      <Box className="mb-4">
        <div className="mb-4 w-full border shadow-md p-4">
            <div className="mb-1">Class Average</div>
            <div className="font-bold">{classAverage.toFixed(2)}%</div></div>
        <div className="mb-4 w-full border shadow-md p-4">
            <div className="mb-1">Students at Risk</div>
            <div className="font-bold text-red-500">{studentsAtRisk.length}</div>
        </div>
        <div className="mb-4 w-full border shadow-md p-4">
          <div className="mb-1">Pending Grades</div>
            <div className="font-bold ">{pendingGrades.length}</div>
        </div>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>{student.status}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default GradePage;