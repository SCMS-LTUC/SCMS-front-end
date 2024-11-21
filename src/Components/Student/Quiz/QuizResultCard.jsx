import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
export default function QuizResultCard({ quizResult }) {
  const { correctAnswersCount, totalQuestionsCount, quizMark, score } =
    quizResult;
  return (
    <Card className="container !bg-neutral-surface !rounded-lg !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !p-4  !border-l-4">
      <CardContent className="!h-full space-y-4  !pb-4">
        <h1 className="text-2xl !font-semibold">Quiz Instruction</h1>
        <div className="flex space-x-2 items-center !text-accent-success">
          <TaskAltIcon className="!text-accent-success" />
          <h1 className="!text-lg ">Completed</h1>
        </div>

        <div className="mt-4 space-y-2">
          <div className="space-x-2 !text-lg !font-semibold">
            <span>Score:</span>
            <span>
              {score} / {quizMark}
            </span>
            <span>
              {" "}
              {quizMark !== 0 && !isNaN(score) && !isNaN(quizMark)
                ? `${Math.round((score / quizMark) * 100)}%`
                : "Invalid score or quiz mark"}{" "}
            </span>
          </div>

          <Typography>
            Correct Answers: {correctAnswersCount} / {totalQuestionsCount}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

QuizResultCard.propTypes = {
  quizResult: PropTypes.object.isRequired,
};
