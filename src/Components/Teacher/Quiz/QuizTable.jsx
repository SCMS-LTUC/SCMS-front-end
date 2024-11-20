import PropTypes from "prop-types";
import * as React from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Chip,
} from "@mui/material";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import EditIcon from "@mui/icons-material/Edit";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import { useNavigate } from "react-router-dom";
import ConfirmDeleteDialog from "../../Common/ConfirmDeleteDialog";
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

StickyHeadTable.propTypes = {
  quizzes: PropTypes.array.isRequired,
};

export default function StickyHeadTable({ quizzes }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const navigate = useNavigate();
  const columns = React.useMemo(
    () => [
      { id: "title", label: "Quiz", minWidth: 200 },
      { id: "visible", label: "Status", minWidth: 100 },
      { id: "date", label: "Closed At", minWidth: 100 },
      { id: "participants", label: "Participants", minWidth: 100 },
      { id: "totalMarks", label: "Mark", minWidth: 100 },
      { id: "actions", label: "Actions", minWidth: 100 },
    ],
    []
  );

  //handlers
  const handleEditClick = (quizId) => {
    const selectedQuiz = quizzes.find((quiz) => quiz.id === quizId);
    navigate(`${quizId}/edit-quiz`, { state: { quiz: selectedQuiz } });
  };

  const handleSubmissionClick = (quizId) => {
    navigate(`${quizId}/view-submissions`);
  };

  // Delete dialog
  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    // Handle delete logic here
    console.log("deleted successfully");
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
      className="!border-2 !border-neutral-border !text-secondary-dark !shadow-md !shadow-neutral-border !rounded-lg"
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
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
            {quizzes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.assignmentId}
                  className="hover:!bg-neutral-background"
                >
                  <TableCell className="!text-neutral-textPrimary !font-semibold !bg-neutral-surface !text-lg">
                    {row.title}
                  </TableCell>
                  <TableCell
                    className={`!text-neutral-textMedium !bg-neutral-surface !text-lg`}
                  >
                    <Chip
                      label={row.visible ? "Visible" : "Hidden"}
                      className={`!text-base ${row.visible ? "!bg-green-100 !text-green-700" : "!bg-red-100 !text-red-700"} "`}
                    />
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {formatDate(row.date)}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {row.participants}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {row.totalMarks}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    <IconButton
                      className="hover:!bg-neutral-background transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                      onClick={() => handleSubmissionClick(row.id)}
                    >
                      <AssignmentOutlinedIcon
                        sx={{ fontSize: "28px" }}
                        className="text-accent-emphasis"
                      />
                    </IconButton>
                    <IconButton
                      className="hover:!bg-neutral-background transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                      onClick={() => handleEditClick(row.id)}
                    >
                      <EditOutlinedIcon
                        sx={{ fontSize: "28px" }}
                        className="text-accent-warning"
                      />
                    </IconButton>
                    <IconButton
                      className="hover:!bg-neutral-background transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                      onClick={handleDeleteDialogOpen}
                    >
                      <DeleteOutlineOutlinedIcon
                        sx={{ fontSize: "28px" }}
                        className="text-accent-error"
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
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
      <div>
        <ConfirmDeleteDialog
          open={deleteDialogOpen}
          onClose={handleDeleteDialogClose}
          onConfirm={handleConfirmDelete}
          title="Delete Quiz"
          message="Are you sure you want to delete this quiz?"
        />
      </div>
    </Paper>
  );
}
