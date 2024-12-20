import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import PropTypes from "prop-types";
import { useSubmitAttendance } from "../../../Logic/Teacher/useLectures";

const statusOptions = ["Present", "Absence"];

const PostTableDialog = ({
  rows,
  open,
  onClose,
  lectureId,
  postSuccessfully,
  errorInPost,
}) => {
  const submitAttendance = useSubmitAttendance();
  const initialRequest = {
    lectureId: lectureId,
    lectureAttendance: rows.map((student) => ({
      studentId: student.studentID,
      status: "Present",
    })),
  };

  const [requestData, setRequestData] = React.useState(initialRequest);

  React.useEffect(() => {
    setRequestData(initialRequest);
  }, [lectureId, rows]);

  const handleStatusChange = (event, studentID) => {
    const newStatus = event.target.value;
    setRequestData((prevData) => ({
      ...prevData,
      lectureAttendance: prevData.lectureAttendance.map((attendance) =>
        attendance.studentId === studentID
          ? { ...attendance, status: newStatus }
          : attendance
      ),
    }));
  };

  const handleSubmit = () => {
    try {
      // console.log("this is the attendance request", requestData);
      submitAttendance(requestData);
      onClose();
      postSuccessfully();
    } catch (error) {
      console.error("Error submitting attendance:", error);
      errorInPost(error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      classes={{
        paper: "!rounded-lg border-2 border-neutral-textSecondary ",
      }}
    >
      <DialogTitle className="!pb-0">
        <h1 className="!font-bold !text-3xl !text-neutral-textMedium ">
          Post Attendance
        </h1>
      </DialogTitle>

      <DialogContent className="!p-6">
        <Paper className="!border-2 !border-neutral-border !shadow-md !shadow-neutral-border !rounded-lg">
          <TableContainer className="!max-h-[450px]">
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell className="!text-primary-dark !font-bold !bg-neutral-background !text-xl !w-3/5">
                    Student Name
                  </TableCell>
                  <TableCell
                    className="!text-primary-dark !font-bold !bg-neutral-background !mx-auto !text-xl !w-2/5"
                    align="center"
                  >
                    Status{" "}
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row) => {
                  const studentAttendance = requestData.lectureAttendance.find(
                    (s) => s.studentId === row.studentID
                  );
                  return (
                    <TableRow
                      key={row.studentID}
                      hover
                      className="hover:!bg-neutral-background"
                    >
                      <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg !w-3/5">
                        {row.fullName}
                      </TableCell>
                      <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg !w-2/5">
                        <FormControl fullWidth variant="outlined" size="small">
                          <Select
                            value={
                              studentAttendance ? studentAttendance.status : ""
                            }
                            onChange={(e) =>
                              handleStatusChange(e, row.studentID)
                            }
                            className="!bg-neutral-surface !max-w-xs !mx-auto !px-4"
                          >
                            {statusOptions.map((option) => (
                              <MenuItem
                                key={option}
                                value={option}
                                className="!text-neutral-textMedium hover:!bg-neutral-background hover:!text-primary "
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
        </Paper>
      </DialogContent>

      <DialogActions className="!bg-neutral-background !p-4 !border-t-2 !border-neutral-border">
        <Button onClick={onClose} variant="outlined" color="textMedium">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          className="!text-neutral-surface"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

PostTableDialog.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      studentID: PropTypes.number.isRequired,
      fullName: PropTypes.string.isRequired,
    })
  ).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  lectureId: PropTypes.number.isRequired,
  postSuccessfully: PropTypes.func.isRequired,
  errorInPost: PropTypes.func.isRequired,
};

export default PostTableDialog;
