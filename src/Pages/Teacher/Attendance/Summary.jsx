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
    // <Card className="container !mx-auto !w-4/6 !bg-neutral-surface !rounded-xl !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !mb-10">
    //   <CardContent className="!bg-neutral-background !border-b-2 !border-neutral-border">
    //     <h1 className="font-bold text-xl text-neutral-textPrimary">
    //       Absence Summary
    //     </h1>
    //   </CardContent>

    //   <CardContent className="">
    //     <div className="flex justify-start !border-2 !border-neutral-border rounded-xl">
    //       <Table rows={rows} />
    //     </div>
    //   </CardContent>

    //   <CardContent>
    //     <div className=" bg-neutral-background p-4 rounded-xl space-x-3 ">
    //       {/* <div className="w-4 h-4 bg-primary-light rounded-md"></div> */}
    //       <div className="text-primary-dark">Total Students</div>
    //       <div className="text-primary-dark text-xl">{rows.length}</div>
    //     </div>
    //   </CardContent>
    // </Card>

    <div className="container space-y-6 !mx-auto " style={{ width: "700px" }}>
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
