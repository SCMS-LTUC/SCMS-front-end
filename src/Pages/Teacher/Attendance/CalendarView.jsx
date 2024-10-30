import Tabs from "../../../Components/Teacher/Attendance/Tabs.jsx";
import Calendar from "../../../Components/Teacher/Attendance/Calendar.jsx";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
export default function CalendarView() {
  return (
    <div className="flex flex-col justify-between space-y-5">
      <Tabs />

      <Card className="container !mx-auto !w-4/6 !bg-neutral-surface !rounded-xl !shadow-md !shadow-neutral-border !border-2 !border-neutral-border">
        <CardContent className="!bg-neutral-background !border-b-2 !border-neutral-border">
          <h1 className="font-bold pl-4 text-xl text-neutral-textPrimary">
            Course Schedule
          </h1>
        </CardContent>
        <CardContent className="">
          <div
            className="flex justify-start !border-2 !border-neutral-border rounded-xl  
          "
          >
            <Calendar />
          </div>
        </CardContent>
        <CardContent>
          <div className="flex items-center bg-neutral-background p-4 rounded-xl space-x-3 ">
            <div className="w-4 h-4 bg-primary-dark rounded-md"></div>
            <div className="text-neutral-textSecondary">Scheduled Lectures</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
