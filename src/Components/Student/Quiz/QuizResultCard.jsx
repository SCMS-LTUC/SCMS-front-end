import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";
import { Card, CardContent, Divider } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
export default function QuizResultCard({ quizResult, quizMark }) {
  const score = quizResult.quizMark;
  const correctAnswersCount = quizResult.correctAnswers;
  const totalQuestionsCount = quizResult.totalQuestions;
  return (
    <Card className="container !bg-neutral-surface !rounded-lg !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !p-4  ">
      <CardContent className="!h-full space-y-4  !pb-4">
        <h1 className="text-2xl !font-semibold">Quiz Result</h1>
        <div className="flex space-x-2 items-center !text-accent-success">
          <TaskAltIcon className="!text-accent-success" />
          <h1 className="!text-lg ">Completed</h1>
        </div>
        <Divider className="my-6" />
        <div className="mt-8 space-y-2">
          <div className="flex space-x-4 !text-lg ">
            <h1>Score:</h1>
            <span>
              {score} / {quizMark}
            </span>
            <span>
              (
              {quizMark !== 0 && !isNaN(score) && !isNaN(quizMark)
                ? `${Math.round((score / quizMark) * 100)}%`
                : "Invalid score or quiz mark"}
              )
            </span>
          </div>

          <div className="space-x-4 !text-lg ">
            <span> Correct Answers: </span>
            <span>
              {correctAnswersCount} / {totalQuestionsCount}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

QuizResultCard.propTypes = {
  quizResult: PropTypes.object.isRequired,
  quizMark: PropTypes.number.isRequired,
};
