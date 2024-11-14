// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import PropTypes from "prop-types";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const columns = [
//   { id: "assignment", label: "Assignment", minWidth: 170 },
//   { id: "status", label: "Status", minWidth: 100 },
//   { id: "dueDate", label: "Due Date", minWidth: 100 },
//   { id: "submissions", label: "Submissions", minWidth: 100 },
//   { id: "mark", label: "Mark", minWidth: 100 },
//   { id: "actions", label: "Actions", minWidth: 100 },
// ];

// StickyHeadTable.propTypes = {
//   rows: PropTypes.array.isRequired,
// };

// export default function StickyHeadTable({ rows }) {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const Navigate = useNavigate();

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A";
//     const date = new Date(dateString);
//     return (
//       date.toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "2-digit",
//         day: "2-digit",
//       }) +
//       " " +
//       date.toLocaleTimeString("en-US", {
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: true,
//       })
//     );
//   };

//   return (
//     <Paper
//       sx={{ width: "100%", overflow: "hidden" }}
//       className="!border-2 !border-neutral-border !text-secondary-dark !shadow-md !shadow-neutral-border !rounded-xl"
//     >
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                   className="!text-secondary-dark !font-bold !bg-neutral-background !text-xl"
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 const assignment = row.studentAssignment;
//                 const status = assignment ? "Submitted" : "Not Submitted";
//                 const submittedDate = assignment
//                   ? formatDate(assignment.submissionDate)
//                   : "N/A";
//                 const grade = assignment ? assignment.grade : "N/A";

//                 return (
//                   <TableRow
//                     hover
//                     role="checkbox"
//                     tabIndex={-1}
//                     key={row.studentID}
//                     className="hover:!bg-white"
//                   >
//                     <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
//                       {row.fullName}
//                     </TableCell>
//                     <TableCell className="!text-neutral-textMedium">
//                       {status}
//                     </TableCell>
//                     <TableCell className="!text-neutral-textMedium">
//                       {submittedDate}
//                     </TableCell>
//                     <TableCell className="!text-neutral-textMedium">
//                       {grade}
//                     </TableCell>
//                     <TableCell className="!text-neutral-textMedium">
//                       <Button
//                         variant="contained"
//                         size="small"
//                         color="secondary"
//                         style={{ marginLeft: 8 }}
//                         className="!text-white"
//                         onClick={() =>
//                           Navigate(
//                             "/course-details/:courseName/assignments/:assignmentId/submissions/:submissionId/"
//                           )
//                         }
//                       >
//                         View & Grade
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }

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
      className="!border-2 !border-neutral-border !text-secondary-dark !shadow-md !shadow-neutral-border !rounded-xl"
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                  className="!text-secondary-dark !font-bold !bg-neutral-background !text-xl"
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
                    className={`!text-neutral-textMedium !bg-neutral-surface !text-lg  ${row.visible ? "!-green-500" : "!-red-500"}`}
                  >
                    <Chip
                      variant="outlined"
                      color={row.visible ? "success" : "error"}
                      label={row.visible ? "Visible" : "Hidden"}
                      className="!text-base"
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
                      className="hover:bg-neutral-background transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                      onClick={() => handleSubmissionClick(row.assignmentId)}
                    >
                      <AssignmentOutlinedIcon
                        sx={{ fontSize: "28px" }}
                        className="text-secondary"
                      />
                    </IconButton>
                    <IconButton
                      className="hover:bg-neutral-background transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                      onClick={() => handleEditClick(row.assignmentId)}
                    >
                      <EditOutlinedIcon
                        sx={{ fontSize: "28px" }}
                        className="text-accent-warning"
                      />
                    </IconButton>
                    <IconButton
                      className="hover:bg-neutral-background transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
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
