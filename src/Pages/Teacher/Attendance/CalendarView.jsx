// import Calendar from "../../../Components/Teacher/Attendance/Calendar.jsx";
import CalendarNew from "../../../Components/Teacher/Attendance/CalendarNew.jsx";
import { Divider, Typography } from "@mui/material";
export default function CalendarView() {
  return (
    // <div className="container space-y-6 ">
    //   <div className="">
    //     <h1 className="font-bold  text-3xl text-neutral-textPrimary">
    //       Course Schedule
    //     </h1>
    //   </div>
    //   <Divider className="!my-4" />
    //   <div className="flex space-x-12">
    //     <div>
    //       <div className="flex justify-start">
    //         <CalendarNew />
    //       </div>
    //     </div>
    //     <div>
    //       <div className="flex items-center rounded-xl space-x-3 ">
    //         <div className="w-5 h-4 bg-primary-light rounded-md"></div>
    //         <div className="text-neutral-textSecondary">Scheduled Lectures</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col justify-between !p-8">
      <div className="container space-y-6 !mx-auto">
        <div className="flex justify-between">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Course Schedule
          </Typography>
          <div className="!flex !justify-end">
            {/* <Button
              color="secondary"
              onClick={handleNewDialogOpen}
              className="!text-neutral-surface"
              variant="contained"
              startIcon={<AddIcon />}
            >
              Create
            </Button> */}
          </div>
        </div>
        <Divider className="!my-4" />
        <div>
          <div className="flex flex-col justify-start space-y-6 w-fit">
            <CalendarNew />
          </div>
        </div>
        <Divider className="!my-4" />
      </div>
    </div>
  );
}
