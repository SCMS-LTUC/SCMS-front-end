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
  assignments: PropTypes.array.isRequired,
};

export default function StickyHeadTable({ assignments }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);

  const navigate = useNavigate();
  const columns = React.useMemo(
    () => [
      { id: "assignmentName", label: "Assignment", minWidth: 200 },
      { id: "visible", label: "Status", minWidth: 100 },
      { id: "dueDate", label: "Due Date", minWidth: 100 },
      { id: "submissions", label: "Submissions", minWidth: 100 },
      { id: "mark", label: "Mark", minWidth: 100 },
      { id: "actions", label: "Actions", minWidth: 100 },
    ],
    []
  );

  //handlers
  function handleEditClick(id) {
    const selectedAssignment = assignments.find(
      (assignment) => assignment.assignmentId === id
    );
    navigate(`/course-details/:courseName/assignments/${id}/edit`, {
      state: { assignment: selectedAssignment },
    });
  }

  function handleSubmissionClick(id) {
    navigate(`/course-details/:courseName/assignments/${id}/submissions`);
  }

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
                  // className="!text-secondary-dark !font-bold !bg-neutral-background !text-xl"
                  className="!text-primary !font-bold !bg-neutral-background
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
              .map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.assignmentId}
                  className="hover:!bg-neutral-background"
                >
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {row.assignmentName}
                  </TableCell>
                  <TableCell
                    className={`!text-neutral-textMedium !bg-neutral-surface !text-lg  `}
                  >
                    <Chip
                      label={row.visible ? "Visible" : "Hidden"}
                      className={`!text-base ${row.visible ? "!bg-green-100 !text-green-700" : "!bg-red-100 !text-red-700"} "`}
                    />
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {formatDate(row.dueDate)}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {row.submissions}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {row.mark}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    <IconButton
                      className="hover:!bg-neutral-background transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                      onClick={() => handleSubmissionClick(row.assignmentId)}
                    >
                      <AssignmentOutlinedIcon
                        sx={{ fontSize: "28px" }}
                        className="text-accent-emphasis"
                      />
                    </IconButton>
                    <IconButton
                      className="hover:!bg-neutral-background transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                      onClick={() => handleEditClick(row.assignmentId)}
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
        count={assignments.length}
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
