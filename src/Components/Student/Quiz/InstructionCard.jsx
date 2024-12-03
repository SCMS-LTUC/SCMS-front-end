import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  //   Chip,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
export default function InstructionCard({ duration }) {
  const { courseId, quizId } = useParams();
  return (
    <Card className="container !bg-neutral-surface !rounded-lg !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !p-4  ">
      <CardContent className="!h-full space-y-4  !pb-4">
        <h1 className="text-2xl !font-medium">Quiz Instruction</h1>
        <div className="flex items-center border-2 border-neutral-border rounded-md p-3 space-x-2 text-neutral-textPrimary">
          <InfoOutlinedIcon />
          <h1 className="!text-base">
            Once you start the quiz, you will have {duration} minutes to
            complete it.Make sure you have a stable internet connection before
            starting.
          </h1>
        </div>
        <div>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-2 !text-base"
          >
            <li className="!text-base">
              You can&apos;t pause the timer once the quiz start
            </li>
            <li>All questions must be answered</li>
            <li>You can review and change your answer before submission</li>
            <li>The quiz will auto submit when the time runs out</li>
          </ul>
        </div>
        <div className="flex justify-end">
          <Button
            variant="contained"
            className="!text-white"
            LinkComponent={Link}
            to={`/course-details/${courseId}/quizzes/take-quiz/${quizId}`}
          >
            Start Quiz
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

InstructionCard.propTypes = {
  duration: PropTypes.string.isRequired,
};
