import { useParams } from "react-router-dom";
// import { useState } from "react";
import {
  // Typography, Divider,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

export default function QuizLayout({ children }) {
  // const navigate = useNavigate();
  const { courseId } = useParams();
  console.log(courseId);

  return (
    <div className="flex flex-col justify-between ">
      <div>
        <Button
          LinkComponent={Link}
          to={`/course-details/${courseId}/quizzes/`}
          // onClick={() => navigate(`/course-details/:courseName/quizzes/`)}
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
