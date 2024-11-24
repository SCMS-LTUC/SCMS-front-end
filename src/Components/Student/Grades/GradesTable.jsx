import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

// Sample data
const data = [
  {
    category: "Assignments",
    overallGrade: "75%",
    weight: "45%",
    items: [
      {
        name: "Assignment 1",
        grade: "18/20",
        weight: "10%",
        achievedWeight: "9%",
      },
      {
        name: "Midterm Assignment",
        grade: "25/30",
        weight: "15%",
        achievedWeight: "12.5%",
      },
      {
        name: "Final Assignment",
        grade: "28/35",
        weight: "20%",
        achievedWeight: "16%",
      },
    ],
  },
  {
    category: "Quizzes",
    overallGrade: "80%",
    weight: "25%",
    items: [
      { name: "Quiz 1", grade: "15/20", weight: "5%", achievedWeight: "3.75%" },
      { name: "Quiz 2", grade: "12/15", weight: "10%", achievedWeight: "8%" },
      {
        name: "Final Quiz",
        grade: "18/25",
        weight: "10%",
        achievedWeight: "7.2%",
      },
    ],
  },
];

const CollapsibleTable = () => {
  const [openRows, setOpenRows] = useState({});

  // Toggle collapse state for a row
  const handleToggle = (category) => {
    setOpenRows((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <strong>Category</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Overall Grade</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Weight</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <React.Fragment key={row.category}>
              {/* Collapsible Row */}
              <TableRow>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleToggle(row.category)}
                  >
                    {openRows[row.category] ? (
                      <KeyboardArrowUp />
                    ) : (
                      <KeyboardArrowDown />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell align="center">{row.overallGrade}</TableCell>
                <TableCell align="center">{row.weight}</TableCell>
              </TableRow>

              {/* Expanded Details */}
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={4}
                >
                  <Collapse
                    in={openRows[row.category] || false}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Box margin={1}>
                      <Typography variant="h6" gutterBottom>
                        Details
                      </Typography>
                      <Table size="small" aria-label="details">
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <strong>Name</strong>
                            </TableCell>
                            <TableCell align="center">
                              <strong>Grade</strong>
                            </TableCell>
                            <TableCell align="center">
                              <strong>Weight</strong>
                            </TableCell>
                            <TableCell align="center">
                              <strong>Achieved Weight</strong>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {row.items.map((item) => (
                            <TableRow key={item.name}>
                              <TableCell>{item.name}</TableCell>
                              <TableCell align="center">{item.grade}</TableCell>
                              <TableCell align="center">
                                {item.weight}
                              </TableCell>
                              <TableCell align="center">
                                {item.achievedWeight}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
