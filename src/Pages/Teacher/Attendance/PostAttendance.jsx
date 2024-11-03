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
          className="!text-secondary !text-md !py-3 !px-4 space-x-2 hover:!bg-secondary-lighter hover:!text-neutral-surface transition-all"
          variant="text"
        >
          <ArrowBackOutlinedIcon />
          <h1>Back to Calendar</h1>
        </Button>
      </div>

      {/* <Card
        className="container !mx-auto !bg-neutral-surface !rounded-xl !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !mb-10"
        style={{ width: "700px" }}
      >
        <CardContent className="!bg-neutral-background !border-b-2 !border-neutral-border">
          <h1 className="font-bold  text-xl text-neutral-textPrimary">
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
      </Card> */}

      <div className="container space-y-6 !mx-auto " style={{ width: "700px" }}>
        <div className="">
          <h1 className="font-bold  text-2xl text-neutral-textPrimary">
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
              className="!text-neutral-surface !bg-primary"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
