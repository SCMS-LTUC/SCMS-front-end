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
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.grade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default GradePage;