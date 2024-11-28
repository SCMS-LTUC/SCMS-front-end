import PropTypes from "prop-types";
import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Chip,
  // Button,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useNavigate, useParams } from "react-router-dom";
import { useAssignments } from "../../../Logic/Student/useAssignments";

const formatDate = (dateString) => {
  if (!dateString) return { date: "N/A", time: "N/A" };

  const date = new Date(dateString);
  const toDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const toTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return { date: toDate, time: toTime };
};

StickyHeadTable.propTypes = {
  assignments: PropTypes.array.isRequired,
};

export default function StickyHeadTable() {
  const { courseId } = useParams();
  const { assignments } = useAssignments(courseId);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();

  const columns = React.useMemo(
    () => [
      { id: "assignmentName", label: "Assignment", minWidth: 100 },
      { id: "score", label: "Score", minWidth: 100 },
      { id: "status", label: "Status", minWidth: 100 },
    ],
    []
  );
  const handleAssignmentClick = (assignment) => {
    if (assignment.studentAssignment !== null) {
      // if the student has submitted the assignment navigate to the view results page
      navigate(
        `/course-details/${courseId}/assignments/${assignment.assignmentId}/view-submission/${assignment.studentAssignment.studentAssignmentId}`
      );
    } else {
      // if the student has not submitted the assignment navigate to the submit assignment page
      navigate(
        `/course-details/${courseId}/assignments/Submit-assignment/${assignment.assignmentId}`
      );
    }
    // navigate(`/course-details/${courseId}/`);
  };

  // pagination
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
      className="!border-2 !border-neutral-border !text-secondary-dark !shadow-md !shadow-neutral-border !rounded-md"
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                  className="!text-primary-dark !font-bold !bg-neutral-background
                   !text-xl"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {assignments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                let score = null;
                if (row.studentAssignment && row.studentAssignment.grade) {
                  score = Math.round(
                    (row.studentAssignment.grade / row.mark) * 100
                  );
                }
                const formattedDueDate = formatDate(row.dueDate);
                const status =
                  row.studentAssignment === null
                    ? "Not Submitted"
                    : "Submitted";
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.quizId}
                    className="hover:!bg-white"
                  >
                    <TableCell className="space-y-2">
                      <div
                        className={`!text-neutral-textPrimary !font-medium !bg-neutral-surface
                        !text-lg hover:!underline !text-inherit hover:!text-accent-info transition-all hover:cursor-pointer`}
                        onClick={() => {
                          handleAssignmentClick(row);
                        }}
                      >
                        {row.assignmentName}
                      </div>
                      <div>
                        <div>
                          <Chip
                            icon={
                              <CalendarTodayOutlinedIcon className=" !text-neutral-textSecondary" />
                            }
                            label={"Due:" + formattedDueDate.date}
                            className="!bg-white !text-neutral-textSecondary"
                            size="small"
                          />
                          <Chip
                            icon={
                              <AccessTimeIcon className=" !text-neutral-textSecondary" />
                            }
                            label={formattedDueDate.time}
                            size="small"
                            className="!bg-white !text-neutral-textSecondary"
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                      {score !== null ? score + "%" : "-"}
                    </TableCell>
                    <TableCell
                      className={`!text-neutral-textMedium !bg-neutral-surface !text-lg`}
                    >
                      <Chip
                        label={status}
                        className={
                          status === "Submitted"
                            ? "!bg-green-100 !text-green-700"
                            : "!bg-red-100 !text-red-700"
                        }
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
        count={assignments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
