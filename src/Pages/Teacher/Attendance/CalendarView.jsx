import Calendar from "../../../Components/Teacher/Attendance/Calendar.jsx";
import { Divider, Typography, Button } from "@mui/material";
import { useState } from "react";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import SummaryDialog from "../../../Components/Teacher/Attendance/SummaryTableDialog.jsx";
import { useAttendanceSummary } from "../../../Logic/Teacher/useLectures.js";
import { useParams } from "react-router-dom";
import NotificationSnackbar from "../../../Components/Common/NotificationSnackbar.jsx";

export default function CalendarView() {
  const { courseId } = useParams();
  const { attendanceSummary } = useAttendanceSummary(courseId);
  const rows = attendanceSummary;
  const [summaryDialogOpen, setSummaryDialogOpen] = useState(false);
  const handleDialogOpen = () => {
    setSummaryDialogOpen(true);
  };
  const handleDialogClose = () => {
    setSummaryDialogOpen(false);
  };
  // const rows = [
  //   {
  //     studentID: "Student1",
  //     fullName: "Dima Salem",
  //     absenceRateForTheStudent: "25%",
  //   },
  //   {
  //     studentID: "Student2",
  //     fullName: "Saja Alyouns",
  //     absenceRateForTheStudent: "5%",
  //   },
  //   {
  //     studentID: "Student3",
  //     fullName: "Mohammad Al-farwan",
  //     absenceRateForTheStudent: "20%",
  //   },
  // ];

  //snack bar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("info");
  // const [count, setCount] = useState(0);

  const handleOpenSnackbar = (message, type) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  const postSuccessfully = () => {
    handleOpenSnackbar("Submit Successfully", "success");
  };
  const errorInPost = (errorPostAttendance) => {
    handleOpenSnackbar(errorPostAttendance, "error");
  };

  // snack bar end

  // const rows = [
  //   {
  //     studentID: "Student1",
  //     fullName: "Dima Salem",
  //     absenceRateForTheStudent: "25%",
  //   },
  //   {
  //     studentID: "Student2",
  //     fullName: "Saja Alyouns",
  //     absenceRateForTheStudent: "5%",
  //   },
  //   {
  //     studentID: "Student3",
  //     fullName: "Mohammad Al-farwan",
  //     absenceRateForTheStudent: "20%",
  //   },
  // ];
  return (
    <div className="flex flex-col justify-between !p-8">
      <div className="container space-y-6 !mx-auto">
        <div className="flex justify-between">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Course Schedule
          </Typography>
          <div className="!flex !justify-end">
            <Button
              color="secondary"
              onClick={handleDialogOpen}
              // className="!text-neutral-surface"
              variant="contained"
              startIcon={<SummarizeOutlinedIcon />}
            >
              Summary
            </Button>
          </div>
        </div>
        <Divider className="!my-4" />
        <div>
          <div className="flex flex-col justify-start space-y-6 w-fit">
            <Calendar
              postSuccessfully={postSuccessfully}
              errorInPost={errorInPost}
            />
          </div>
        </div>
        <Divider className="!my-4" />
      </div>
      <div>
        <SummaryDialog
          rows={rows}
          open={summaryDialogOpen}
          onClose={handleDialogClose}
        />
      </div>
      <div>
        <NotificationSnackbar
          open={snackbarOpen}
          onClose={handleCloseSnackbar}
          message={snackbarMessage}
          type={snackbarType}
        />
      </div>
    </div>
  );
}
