//import { useParams } from "react-router-dom";
// import { useState } from "react";
import { Typography, Divider } from "@mui/material";
import AssignmentTable from "../../../Components/Student/Assignments/AssignmentTable";
// the assignments is the data from api/assignments/courses/{courseId}/student/assignments
//import { assignments } from "../../../Logic/Student/Data";

export default function AssignmentList() {
  //const { courseId } = useParams();
  return (
    <div className="flex flex-col justify-between !p-8">
      <div className="container space-y-6 !mx-auto">
        <div className="flex justify-between">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Assignments
          </Typography>
        </div>
        <Divider className="!my-4" />
        <div>
          <div className="flex flex-col justify-start space-y-6">
            <AssignmentTable  />
          </div>
        </div>
        <Divider className="!my-4" />
      </div>
    </div>
  );
}
