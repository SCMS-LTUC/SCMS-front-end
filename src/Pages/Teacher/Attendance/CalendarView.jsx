import CalendarNew from "../../../Components/Teacher/Attendance/CalendarNew.jsx";
import { Divider, Typography, Button } from "@mui/material";
import { useState } from "react";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import SummaryDialog from "../../../Components/Teacher/Attendance/SummaryTable.jsx";
export default function CalendarView() {
  const [summaryDialogOpen, setSummaryDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setSummaryDialogOpen(true);
  };

  const handleDialogClose = () => {
    setSummaryDialogOpen(false);
  };
  const rows = [
    {
      studentID: "Student1",
      fullName: "Dima Salem",
      absenceRateForTheStudent: "25%",
    },
    {
      studentID: "Student2",
      fullName: "Saja Alyouns",
      absenceRateForTheStudent: "5%",
    },
    {
      studentID: "Student3",
      fullName: "Mohammad Al-farwan",
      absenceRateForTheStudent: "20%",
    },
  ];
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
            <CalendarNew />
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
    </div>
  );
}
