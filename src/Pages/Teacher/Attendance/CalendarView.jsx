import Calendar from "../../../Components/Teacher/Attendance/Calendar.jsx";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
export default function CalendarView() {
  return (
    // <Card className="container !mx-auto !w-4/6 !bg-neutral-surface !rounded-xl !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !mb-10">
    //   <CardContent className="!bg-neutral-background !border-b-2 !border-neutral-border">
    //     <h1 className="font-bold  text-xl text-neutral-textPrimary">
    //       Course Schedule
    //     </h1>
    //   </CardContent>
    //   <CardContent className="">
    //     <div className="flex justify-start !border-2 !border-neutral-border rounded-xl">
    //       <Calendar />
    //     </div>
    //   </CardContent>
    //   <CardContent>
    //     <div className="flex items-center bg-neutral-background p-4 rounded-xl space-x-3 ">
    //       <div className="w-4 h-4 bg-primary-light rounded-md"></div>
    //       <div className="text-neutral-textSecondary">Scheduled Lectures</div>
    //     </div>
    //   </CardContent>
    // </Card>

    <div className="container space-y-6 !mx-auto " style={{ width: "700px" }}>
      <div className="">
        <h1 className="font-bold  text-3xl text-neutral-textPrimary">
          Course Schedule
        </h1>
      </div>
      <div>
        <div className="flex justify-start">
          <Calendar />
        </div>
      </div>
      <div>
        <div className="flex items-center rounded-xl space-x-3 ">
          <div className="w-5 h-4 bg-primary-light rounded-md"></div>
          <div className="text-neutral-textSecondary">Scheduled Lectures</div>
        </div>
      </div>
    </div>
  );
}
