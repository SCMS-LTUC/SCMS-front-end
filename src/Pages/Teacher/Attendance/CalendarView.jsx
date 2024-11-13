import Calendar from "../../../Components/Teacher/Attendance/Calendar.jsx";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
export default function CalendarView() {
  return (
    <div className="container space-y-6 !mx-auto w-1/2">
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
