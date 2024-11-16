import { Typography, Divider, Button } from "@mui/material";

import GradesTable from "../../../Components/Teacher/Grade/GradesTable";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { v4 as uuidv4 } from "uuid";
import StatCard from "../../../Components/Common/StatCard";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
// variables
// student array and isComplete are the response data
const students = [
  {
    studentId: 1,
    studentName: "John Doe",
    assignments: 90.0,
    quizzes: 70.0,
    averageGrades: 80.0,
  },
  {
    studentId: 2,
    studentName: "Dima Salem",
    assignments: 90.0,
    quizzes: 70.0,
    averageGrades: 90.0,
  },
  {
    studentId: 3,
    studentName: "Leen Yasir",
    assignments: 90.0,
    quizzes: 70.0,
    averageGrades: 70.0,
  },
  {
    studentId: 4,
    studentName: "Sara Ahmed",
    assignments: 85.0,
    quizzes: 75.0,
    averageGrades: 80.0,
  },
  {
    studentId: 5,
    studentName: "Omar Kassem",
    assignments: 88.0,
    quizzes: 76.0,
    averageGrades: 82.0,
  },
  {
    studentId: 6,
    studentName: "Maya Fadel",
    assignments: 91.0,
    quizzes: 78.0,
    averageGrades: 84.5,
  },
  {
    studentId: 7,
    studentName: "Zain Alabed",
    assignments: 80.0,
    quizzes: 65.0,
    averageGrades: 72.5,
  },
  {
    studentId: 8,
    studentName: "Fayza Al-Zahra",
    assignments: 95.0,
    quizzes: 80.0,
    averageGrades: 87.5,
  },
  {
    studentId: 9,
    studentName: "Ahmed Farouk",
    assignments: 78.0,
    quizzes: 72.0,
    averageGrades: 75.0,
  },
  {
    studentId: 10,
    studentName: "Laila Mansour",
    assignments: 85.0,
    quizzes: 70.0,
    averageGrades: 77.5,
  },
  {
    studentId: 11,
    studentName: "Noor Saeed",
    assignments: 88.0,
    quizzes: 82.0,
    averageGrades: 85.0,
  },
  {
    studentId: 12,
    studentName: "Ali Khalil",
    assignments: 92.0,
    quizzes: 78.0,
    averageGrades: 85.0,
  },
  {
    studentId: 13,
    studentName: "Samira Ismail",
    assignments: 70.0,
    quizzes: 60.0,
    averageGrades: 65.0,
  },
  {
    studentId: 14,
    studentName: "Rami Salah",
    assignments: 80.0,
    quizzes: 77.0,
    averageGrades: 78.5,
  },
  {
    studentId: 15,
    studentName: "Khaled Jamal",
    assignments: 88.0,
    quizzes: 85.0,
    averageGrades: 86.5,
  },
];
const isComplete = false;
////////////////
const totalGrades = students.reduce(
  (sum, student) => sum + student.averageGrades,
  0
);
const classAverage = Math.round(totalGrades / students.length);
const topPerformance = Math.max(
  ...students.map((student) => student.averageGrades)
);
const studentsNeedingHelp = students.filter(
  (student) => student.averageGrades <= classAverage - 10
);
const totalStudents = students.length;
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

export default function Classlist() {
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
              // onClick={() =>
              //   Navigate("/course-details/:courseName/quizzes/create-quiz")
              // }
              className={``}
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
            <GradesTable students={students} classAverage={classAverage} />
          </div>
        </div>
        <Divider className="!my-4" />
      </div>
    </div>
  );
}
