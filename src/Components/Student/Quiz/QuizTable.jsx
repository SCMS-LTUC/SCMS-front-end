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
const setStatus = (startDate, endDate, score) => {
  const now = new Date().toISOString();

  if (startDate > now) return "UpComing";
  if (endDate < now) {
    return score === null ? "Expired" : "Completed";
  }
  if (startDate < now && endDate > now) {
    return score === null ? "Available" : "Completed";
  }
  return "N/A";
};
const statusClassName = (status) => {
  switch (status) {
    case "UpComing":
      return "!bg-yellow-100 !text-yellow-700";
    case "Expired":
      return "!bg-red-100 !text-red-700";
    case "Available":
      return "!bg-blue-100 !text-blue-700";
    case "Completed":
      return "!bg-green-100 !text-green-700";
    default:
      return "!bg-gray-100 !text-gray-700";
  }
};
StickyHeadTable.propTypes = {
  quizzes: PropTypes.array.isRequired,
};

export default function StickyHeadTable({ quizzes }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();
  const { courseId } = useParams();
  //   const navigate = useNavigate();
  const columns = React.useMemo(
    () => [
      { id: "quizName", label: "Quiz", minWidth: 100 },
      { id: "score", label: "Score", minWidth: 100 },
      { id: "status", label: "Status", minWidth: 100 },
    ],
    []
  );
  const handleQuizClick = (quizId) => {
    navigate(`/course-details/${courseId}/quizzes/quiz-instruction/${quizId}`);
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
            {quizzes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                let score = null;
                if (row.quizResult) {
                  score = Math.round((row.quizResult.score / row.mark) * 100);
                }
                const formattedStartTime = formatDate(row.startTime);
                const formattedEndTime = formatDate(row.endTime);
                const status = setStatus(row.startTime, row.endTime, score);
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
                        className={`!text-neutral-textPrimary !font-semibold !bg-neutral-surface
                        !text-lg ${status === "Available" ? "hover:!underline !text-inherit hover:!text-accent-info transition-all hover:cursor-pointer" : ""}`}
                        onClick={() => {
                          if (status === "Available") {
                            handleQuizClick(row.quizId);
                          }
                        }}
                      >
                        {row.title}
                      </div>
                      <div>
                        <div>
                          <Chip
                            icon={
                              <CalendarTodayOutlinedIcon className=" !text-neutral-textSecondary" />
                            }
                            label={"Available from:" + formattedStartTime.date}
                            className="!bg-white !text-neutral-textSecondary"
                            size="small"
                          />
                          <Chip
                            icon={
                              <AccessTimeIcon className=" !text-neutral-textSecondary" />
                            }
                            label={formattedStartTime.time}
                            size="small"
                            className="!bg-white !text-neutral-textSecondary"
                          />
                        </div>
                        <div>
                          <Chip
                            icon={
                              <CalendarTodayOutlinedIcon className=" !text-neutral-textSecondary" />
                            }
                            label={"Until:" + formattedEndTime.date}
                            size="small"
                            className="!bg-white !text-neutral-textSecondary"
                          />
                          <Chip
                            icon={
                              <AccessTimeIcon className=" !text-neutral-textSecondary" />
                            }
                            label={formattedEndTime.time}
                            size="small"
                            className="!bg-white !text-neutral-textSecondary"
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                      {score ? score + "%" : "-"}
                    </TableCell>
                    <TableCell
                      className={`!text-neutral-textMedium !bg-neutral-surface !text-lg`}
                    >
                      <Chip
                        label={status}
                        className={statusClassName(status)}
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
        count={quizzes.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
