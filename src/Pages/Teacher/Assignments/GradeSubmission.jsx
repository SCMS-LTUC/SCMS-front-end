import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import GradeSubmissionForm from "../../../Components/Teacher/Assignment/GradeSubmissionForm";
import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";

export default function GradeSubmission() {
  const { courseId, assignmentId } = useParams();

  const Navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between ">
      <div>
        <Button
          onClick={() =>
            Navigate(
              `/course-details/${courseId}/assignments/${assignmentId}/submissions/`
            )
          }
          className="!text-secondary !text-base  hover:!bg-secondary-lighter hover:!text-neutral-surface !transition-all !duration-300 !rounded-full"
          variant="text"
          startIcon={<ArrowBackOutlinedIcon />}
        >
          Back to Submissions
        </Button>
      </div>

      <div className="container space-y-6 !mx-auto !p-8">
        <GradeSubmissionForm />
      </div>
    </div>
  );
}
