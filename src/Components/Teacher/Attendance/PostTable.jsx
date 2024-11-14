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
import { Select, MenuItem, FormControl } from "@mui/material";

const statusOptions = ["Present", "Absent"];

StickyHeadTable.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default function StickyHeadTable({ rows }) {
  const columns = React.useMemo(
    () => [
      { id: "fullName", label: "Student Name", minWidth: 170 },
      { id: "status", label: "Status", minWidth: 100 },
    ],
    []
  );

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
                const studentAttendance = requestData.lectureAttendance.find(
                  (s) => s.studentId === row.studentID
                );
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.studentID}
                    className="hover:!bg-white"
                  >
                    {/* Student Name Cell */}
                    <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg ">
                      {row.fullName}
                    </TableCell>
                    {/* Status Dropdown Cell using MUI Select */}
                    <TableCell>
                      <FormControl variant="standard">
                        {/* <InputLabel>Status</InputLabel> */}
                        <Select
                          value={
                            studentAttendance ? studentAttendance.status : ""
                          }
                          onChange={(e) => handleStatusChange(e, row.studentID)}
                        >
                          {statusOptions.map((option) => (
                            <MenuItem
                              key={option}
                              value={option}
                              className="hover:!bg-primary hover:!text-neutral-surface"
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
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
