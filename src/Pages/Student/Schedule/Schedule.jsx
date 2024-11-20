// import { useState } from "react";
import { Typography, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ScheduleTable from "../../../Components/Teacher/Schedule/ScheduleTable";
import { scheduleCourses } from "../../../Logic/Student/Data";
export default function Schedule() {
  return (
    <div className="">
      <Card className="!p-4 !h-auto container !mx-auto !bg-neutral-surface !rounded-lg !shadow-md !shadow-neutral-border !border-2 !border-neutral-border">
        <CardContent>
          <div className="">
            <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
              My Schedule
            </Typography>
          </div>
        </CardContent>

        <Divider className="!mb-4" />

        <CardContent>
          <div>
            <div className="flex flex-col justify-start space-y-6">
              <ScheduleTable scheduleCourses={scheduleCourses} />
            </div>
          </div>
        </CardContent>

        <Divider className="!my-4" />
      </Card>
    </div>
  );
}
