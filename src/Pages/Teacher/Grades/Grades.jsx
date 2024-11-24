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
// get the data from this endpoint: api/Courses/{courseId}/grades
import { students, currentCourse } from "../../../Logic/Teacher/Data";
const courseStudents = students.$values;
const isComplete = currentCourse.isComplete;
////////////////
const totalGrades = courseStudents.reduce(
  (sum, student) => sum + student.averageGrades,
  0
);
const classAverage = Math.round(totalGrades / courseStudents.length);
const topPerformance = Math.max(
  ...courseStudents.map((student) => student.averageGrades)
);
const studentsNeedingHelp = courseStudents.filter(
  (student) => student.averageGrades <= classAverage - 10
);
const totalStudents = courseStudents.length;
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
            <GradesTable
              students={courseStudents}
              classAverage={classAverage}
            />
          </div>
        </div>
        <Divider className="!my-4" />
      </div>
    </div>
  );
}
