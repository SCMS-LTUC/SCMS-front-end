// import { useState } from "react";
import { Button, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
// import AssignmentCard from "../../../Components/Teacher/Assignment/AssignmentCard";
import AssignmentTable from "../../../Components/Teacher/Assignment/AssignmentTable";
import { useAssignments } from "../../../Logic/Teacher/useAssignment";
import { useParams } from "react-router-dom";

export default function AssignmentList() {
  const { courseId } = useParams();
  const { assignments, error, loading } = useAssignments(courseId);
  const Navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
                Navigate(`/course-details/${courseId}/assignments/create`)
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
