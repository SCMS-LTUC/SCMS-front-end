// import { useState } from "react";
import { Button, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
// import AssignmentCard from "../../../Components/Teacher/Assignment/AssignmentCard";
import AssignmentTable from "../../../Components/Teacher/Assignment/AssignmentTable";
export default function AssignmentList() {
  const assignments = [
    {
      assignmentId: 1,
      assignmentName: "Assignment 1",
      dueDate: "2024-11-02T00:07:38.913Z",
      visible: false,
      submissions: 20,
      description: "Description for Assignment 1",
      mark: 10,
    },
    {
      assignmentId: 2,
      assignmentName: "Assignment 2",
      dueDate: "2024-11-14T00:07:38.913Z",
      visible: true,
      submissions: 15,
      description: "Description for Assignment 2",
      mark: 20,
    },
  ];

  const Navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between !p-8">
      <div className="container space-y-6 !mx-auto">
        <div className="flex justify-between">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Assignments
          </Typography>
          <div className="!flex !justify-end">
            <Button
              color="secondary"
              onClick={() =>
                Navigate("/course-details/:courseName/assignments/create")
              }
              className="!text-neutral-surface"
              variant="contained"
              startIcon={<AddIcon />}
            >
              Create
            </Button>
          </div>
        </div>
        <Divider className="!my-4" />
        <div>
          <div className="flex flex-col justify-start space-y-6">
            <AssignmentTable assignments={assignments} />
          </div>
        </div>
        <Divider className="!my-4" />
      </div>
    </div>
  );
}
