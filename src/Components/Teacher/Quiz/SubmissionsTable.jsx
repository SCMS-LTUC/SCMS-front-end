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
import { useParams } from "react-router-dom";

StickyHeadTable.propTypes = {
  rows: PropTypes.array.isRequired,
};
// Mock Submissions Data
const mockSubmissions = {
  1: [
    { id: 101, studentName: "John Doe", score: 85, date: "2024-10-02" },
    { id: 102, studentName: "Jane Smith", score: 92, date: "2024-10-03" },
  ],
  2: [
    { id: 201, studentName: "Alice Johnson", score: 78, date: "2024-10-16" },
    { id: 202, studentName: "Bob Brown", score: 88, date: "2024-10-17" },
  ],
  3: [
    { id: 301, studentName: "Charlie Davis", score: 95, date: "2024-11-06" },
    { id: 302, studentName: "Diana Evans", score: 89, date: "2024-11-07" },
  ],
};

export default function StickyHeadTable() {
  const { quizId } = useParams();
  const submissions = mockSubmissions[quizId] || [];
  const columns = React.useMemo(
    () => [
      { id: "studentName", label: "Student Name", minWidth: 170 },
      // { id: "status", label: "Status", minWidth: 100 },
      { id: "submittedDate", label: "Submitted At", minWidth: 100 },
      { id: "grade", label: "Grade", minWidth: 100 },
      // { id: "actions", label: "Actions", minWidth: 100 },
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

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return (
      date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }) +
      " " +
      date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    );
  };

  return (
    <Paper
      sx={{ width: "100%", overflow: "hidden" }}
      className="!border-2 !border-neutral-border !text-secondary-dark !shadow-md !shadow-neutral-border !rounded-lg"
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
                  // className="!text-secondary-dark !font-bold !bg-neutral-background !text-xl"
                  className="!text-primary-dark !font-bold !bg-neutral-background
                   !text-xl"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {submissions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const submittedDate = formatDate(row.date);
                const grade = row.score ? row.score : "0";

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.studentID}
                    className="hover:!bg-white"
                  >
                    <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                      {row.studentName}
                    </TableCell>
                    <TableCell className="!text-neutral-textMedium !text-lg">
                      {submittedDate}
                    </TableCell>
                    <TableCell className="!text-neutral-textMedium !text-lg">
                      {grade}
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
        count={submissions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
