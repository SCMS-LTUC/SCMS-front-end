// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Table from "../../../Components/Teacher/Attendance/SummaryTable";

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

export default function Summary() {
  return (
    <div className="container space-y-6 !mx-auto w-1/2">
      <div className="">
        <h1 className="font-bold  text-3xl text-neutral-textPrimary">
          Absence Summary
        </h1>
      </div>
      <div>
        <div className="flex justify-start">
          <Table rows={rows} />
        </div>
      </div>
      <div>
        <div className="flex items-center w-fit bg-neutral-background p-4 rounded-xl space-x-3">
          <div className="text-primary-dark text-lg">Total Students</div>
          <div className="text-primary-dark text-lg">{rows.length}</div>
        </div>
      </div>
    </div>
  );
}
