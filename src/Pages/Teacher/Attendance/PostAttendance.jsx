import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
    <div className="flex flex-col justify-between space-y-10">
      <div>
        <Button
          onClick={() => navigate(`/course-details/${1}/attendance/`)}
          className="!text-secondary !text-md !py-3 !px-4 space-x-2 hover:!bg-secondary-lighter hover:!text-neutral-surface transition-all"
          variant="text"
        >
          <ArrowBackOutlinedIcon />
          {/* <i className="ri-arrow-left-line"/> */}
          <h1>Back to Calendar</h1>
        </Button>
      </div>

      <Card className="container !mx-auto !w-4/6 !bg-neutral-surface !rounded-xl !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !mb-10">
        <CardContent className="!bg-neutral-background !border-b-2 !border-neutral-border">
          <h1 className="font-bold pl-4 text-xl text-neutral-textPrimary">
            Attendance for 31 Oct 2024
          </h1>
        </CardContent>

        <CardContent className="">
          <div className="flex justify-start !border-2 !border-neutral-border rounded-xl">
            <Table rows={rows} />
          </div>
        </CardContent>

        <CardContent>
          <div className="flex justify-end bg-neutral-background p-4 rounded-xl space-x-3 ">
            <Button
              variant="contained"
              className="!text-neutral-surface !bg-primary"
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
