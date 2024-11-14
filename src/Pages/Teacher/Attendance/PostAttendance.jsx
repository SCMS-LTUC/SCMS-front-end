// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Table from "../../../Components/Teacher/Attendance/PostTable";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
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

export default function PostAttendance() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between space-y-8">
      <div>
        <Button
          onClick={() => navigate(`/course-details/:courseName/attendance/`)}
          className="!text-secondary !text-base !py-3 !px-4 space-x-2 hover:!bg-secondary-lighter hover:!text-neutral-surface !transition-all !duration-300"
          variant="text"
          startIcon={<ArrowBackOutlinedIcon />}
        >
          Back to Calendar
        </Button>
      </div>

      <div className="container space-y-6 !mx-auto w-1/2">
        <div className="">
          <h1 className="font-bold  text-3xl text-neutral-textPrimary">
            Attendance for 31 Oct 2024
          </h1>
        </div>
        <div>
          <div className="flex justify-start">
            <Table rows={rows} />
          </div>
        </div>
        <div>
          <div className="flex justify-end  p-4 rounded-xl space-x-3 ">
            <Button
              variant="contained"
              color="primary"
              className="!text-neutral-surface"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
