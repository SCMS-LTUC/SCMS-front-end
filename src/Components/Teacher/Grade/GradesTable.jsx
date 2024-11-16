import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
// import { constrainPoint } from "@fullcalendar/core/internal";

StickyHeadTable.propTypes = {
  students: PropTypes.array.isRequired,
  classAverage: PropTypes.number.isRequired,
};

export default function StickyHeadTable({ students, classAverage }) {
  console.log(classAverage);
  const columns = React.useMemo(
    () => [
      { id: "studentName", label: "Student Name", minWidth: 170 },
      { id: "assignments", label: "Assignments", minWidth: 130 },
      { id: "quizzes", label: "Quizzes", minWidth: 130 },
      { id: "averageGrades", label: "Average Grades", minWidth: 130 },
      { id: "status", label: "Status", minWidth: 130 },
    ],
    []
  );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper
      sx={{ width: "100%", overflow: "hidden" }}
      className="!border-2 !border-neutral-border !text-secondary-dark
          !shadow-md !shadow-neutral-border !rounded-lg "
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className="!text-primary !font-bold !bg-neutral-background !text-xl"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const status =
                  row.averageGrades >= classAverage + 5
                    ? "Excellent"
                    : row.averageGrades <= classAverage - 10
                      ? "Needs Support"
                      : "On Track";
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.studentId}
                    className="hover:!bg-neutral-background"
                  >
                    <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                      {row.studentName}
                    </TableCell>
                    <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                      {row.assignments || "N/A"}%
                    </TableCell>
                    <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                      {row.quizzes || "N/A"}%
                    </TableCell>
                    <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                      {row.averageGrades}%
                    </TableCell>
                    <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                      <Chip
                        // variant="outlined"
                        // color={status === "Pass" ? "success" : "error"}
                        label={status}
                        className={`!text-base ${status === "Needs Support" ? "!bg-red-100 !text-red-700" : status === "Excellent" ? "!bg-green-100 !text-green-700" : "!bg-yellow-100 !text-yellow-700"}`}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={students.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
