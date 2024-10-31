import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "../../../Components/Teacher/Attendance/PostTable";

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
  return (
    <Card className="container !mx-auto !w-4/6 !bg-neutral-surface !rounded-xl !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !mb-10">
      <CardContent className="!bg-neutral-background !border-b-2 !border-neutral-border">
        <h1 className="font-bold pl-4 text-xl text-neutral-textPrimary">
          Absence Summary
        </h1>
      </CardContent>

      <CardContent className="">
        <div className="flex justify-start !border-2 !border-neutral-border rounded-xl">
          <Table rows={rows} />
        </div>
      </CardContent>

      <CardContent>
        <div className=" bg-neutral-background p-4 rounded-xl space-x-3 ">
          {/* <div className="w-4 h-4 bg-primary-light rounded-md"></div> */}
          <div className="text-primary-dark">Total Students</div>
          <div className="text-primary-dark text-xl">{rows.length}</div>
        </div>
      </CardContent>
    </Card>
  );
}
