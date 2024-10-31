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

const columns = [
  { id: "fullName", label: "Student Name", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 100 },
];

const statusOptions = ["Present", "Absent"];

StickyHeadTable.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default function StickyHeadTable({ rows }) {
  const { lectureId } = useParams();
  const initialRequest = {
    lectureId: lectureId,
    lectureAttendance: rows.map((student) => ({
      studentId: student.studentID,
      status: "Present",
    })),
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [requestData, setRequestData] = React.useState(initialRequest);

  // Handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleStatusChange = (event, studentID) => {
    const newStatus = event.target.value;
    const updatedData = {
      ...requestData,
      lectureAttendance: requestData.lectureAttendance.map((student) =>
        student.studentId === studentID
          ? { ...student, status: newStatus }
          : student
      ),
    };
    setRequestData(updatedData);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className="!text-secondary-dark !font-bold"
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
                const studentAttendance = requestData.lectureAttendance.find(
                  (s) => s.studentId === row.studentID
                );
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.studentID}
                    className="hover:!bg-neutral-background"
                  >
                    {/* Student Name Cell */}
                    <TableCell>{row.fullName}</TableCell>
                    {/* Status Dropdown Cell */}
                    <TableCell>
                      <select
                        value={
                          studentAttendance ? studentAttendance.status : ""
                        }
                        onChange={(e) => handleStatusChange(e, row.studentID)}
                        className="p-1 border border-gray-300 rounded-md"
                      >
                        {statusOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
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
