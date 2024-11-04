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
import { Button } from "@mui/material";

const columns = [
  { id: "studentName", label: "Student Name", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "submittedDate", label: "Submitted Date", minWidth: 100 },
  { id: "grade", label: "Grade", minWidth: 100 },
  { id: "actions", label: "Actions", minWidth: 100 },
];

StickyHeadTable.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default function StickyHeadTable({ rows }) {
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
      className="!border-2 !border-neutral-border !text-secondary-dark !shadow-md !shadow-neutral-border !rounded-xl"
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
                  className="!text-secondary-dark !font-bold !bg-neutral-background !text-xl"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const assignment = row.studentAssignment;
                const status = assignment ? "Submitted" : "Not Submitted";
                const submittedDate = assignment
                  ? formatDate(assignment.submissionDate)
                  : "N/A";
                const grade = assignment ? assignment.grade : "N/A";

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.studentID}
                    className="hover:!bg-white"
                  >
                    <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                      {row.fullName}
                    </TableCell>
                    <TableCell className="!text-neutral-textMedium">
                      {status}
                    </TableCell>
                    <TableCell className="!text-neutral-textMedium">
                      {submittedDate}
                    </TableCell>
                    <TableCell className="!text-neutral-textMedium">
                      {grade}
                    </TableCell>
                    <TableCell className="!text-neutral-textMedium">
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        style={{ marginLeft: 8 }}
                        className="!text-white"
                      >
                        View & Grade
                      </Button>
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
