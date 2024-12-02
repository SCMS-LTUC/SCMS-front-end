import { Typography, Divider, Button } from "@mui/material";
import GradesTable from "../../../Components/Teacher/Grade/GradesTable";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { v4 as uuidv4 } from "uuid";
import StatCard from "../../../Components/Common/StatCard";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useGrades, useSubmitGrades } from "../../../Logic/Teacher/useGrades";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
// import {currentCourse} from "../../../Logic/Teacher/Data";
import NotificationSnackbar from "../../../Components/Common/NotificationSnackbar.jsx";

export default function Classlist() {
  const { courseId } = useParams();
  const { grades = [] } = useGrades(courseId);
  const { handleSubmitGrades, status, error } = useSubmitGrades(courseId);
  const { currentCourses } = useSelector((state) => state.courses);
  console.log("currentCourses", currentCourses);
  const isComplete = currentCourses.isComplete;
  console.log("isComplete", isComplete);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("info");
  const [gradingInitiated, setGradingInitiated] = useState(false);

  const handleOpenSnackbar = (message, type) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (gradingInitiated) {
      if (status === "loading complete grading") {
        handleOpenSnackbar("Grading in progress", "warning");
      }
      if (status === "succeeded complete grading") {
        handleOpenSnackbar("Grading completed successfully", "success");
        setGradingInitiated(false);
        window.location.href = "/";
      }

      if (status === "failed complete grading") {
        let errorMessage = error;
        errorMessage = errorMessage.replace(/^Internal server error: /, "");
        handleOpenSnackbar(errorMessage, "error");
        setGradingInitiated(false);
      }
    }
  }, [status, gradingInitiated, error]);

  const totalGrades =
    grades?.reduce((sum, student) => sum + student.averageGrades, 0) || 0;
  const classAverage = Math.round(totalGrades / grades.length);
  const topPerformance = Math.max(
    ...grades.map((student) => student.averageGrades)
  );
  const studentsNeedingHelp = grades.filter(
    (student) => student.averageGrades <= classAverage - 10
  );
  const totalStudents = grades.length;
  const stats = [
    {
      title: "Class Average",
      value: classAverage + "%",
      icon: (
        <StarBorderOutlinedIcon
          className=" text-accent-info"
          sx={{ fontSize: "40px" }}
        />
      ),
      trend: "+5% vs last month",
    },
    {
      title: "Top Performance",
      value: topPerformance + "%",
      icon: (
        <TrendingUpOutlinedIcon
          className=" text-accent-success"
          sx={{ fontSize: "40px" }}
        />
      ),
      trend: "Highest: 95%",
    },
    {
      title: "Support Needed",
      value: studentsNeedingHelp.length,
      icon: (
        <ReportProblemOutlinedIcon
          className="text-red-500"
          sx={{ fontSize: "40px" }}
        />
      ),
      trend:
        studentsNeedingHelp.length == 0
          ? "On track"
          : "Additional attention required",
    },
    {
      title: "Total Students",
      value: totalStudents,
      icon: (
        <PeopleOutlineOutlinedIcon
          className=" text-accent-emphasis text"
          sx={{ fontSize: "40px" }}
        />
      ),
      trend: "Active students",
    },
  ];

  //function to handle complete grading
  const handleCompleteGrading = () => {
    setGradingInitiated(true);
    handleSubmitGrades(courseId);
    console.log("handleCompleteGrading function called");
  };

  return (
    <div className="flex flex-col justify-between !p-8">
      <div className="container space-y-6 !mx-auto">
        <div className="flex justify-between">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Course Performance
          </Typography>
          <div className="!flex !justify-end">
            <Button
              color="secondary"
              onClick={handleCompleteGrading}
              disabled={isComplete}
              variant="contained"
              startIcon={<CheckOutlinedIcon />}
            >
              {isComplete ? "Grading Completed" : "Complete Grading"}
            </Button>
          </div>
        </div>
        <Divider className="!my-4" />
        <div id="cards" className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={uuidv4()} stat={stat} />
          ))}
        </div>
        <div>
          <div className="flex flex-col justify-start space-y-2">
            <GradesTable students={grades} classAverage={classAverage} />
          </div>
        </div>
        <Divider className="!my-4" />
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
