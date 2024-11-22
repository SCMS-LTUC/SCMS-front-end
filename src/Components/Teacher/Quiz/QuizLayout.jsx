import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import PropTypes from "prop-types";

export default function QuizLayout({ children }) {
  const Navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between ">
      <div>
        <Button
          onClick={() => Navigate(`/course-details/:courseName/quizzes/`)}
          className="!text-secondary !text-base  hover:!bg-secondary-lighter hover:!text-neutral-surface !transition-all !duration-300 !rounded-full"
          variant="text"
          startIcon={<ArrowBackOutlinedIcon />}
        >
          Back to Quizzes
        </Button>
      </div>

      <div className="container space-y-6 !mx-auto !p-8">{children}</div>
    </div>
  );
}
QuizLayout.propTypes = {
  children: PropTypes.node,
};
