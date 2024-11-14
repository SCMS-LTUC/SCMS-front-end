import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import GradeSubmissionForm from "../../../Components/Teacher/Assignment/GradeSubmissionForm";
// import PropTypes from "prop-types";

export default function GradeSubmission() {
  const Navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between space-y-8">
      <div>
        <Button
          onClick={() =>
            Navigate(
              "/course-details/:courseName/assignments/:assignmentId/submissions/"
            )
          }
          className="!text-secondary !text-base !py-3 !px-4 space-x-2 hover:!bg-secondary-lighter hover:!text-neutral-surface !transition-all !duration-300"
          variant="text"
          startIcon={<ArrowBackOutlinedIcon />}
        >
          Back to Submissions
        </Button>
      </div>

      <div className="container space-y-6 !mx-auto ">
        <GradeSubmissionForm />
      </div>
    </div>
  );
}
