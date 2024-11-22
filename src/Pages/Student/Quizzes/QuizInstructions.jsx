import { useParams } from "react-router-dom";
import { Typography, Divider, Chip } from "@mui/material";
import QuizLayout from "../../../Components/Student/Quiz/QuizLayout";
import InstructionCard from "../../../Components/Student/Quiz/InstructionCard";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

// the quiz is the data from api/Quiz/{quizId}
import { quiz } from "../../../Logic/Student/Data";

const QuizInstructions = () => {
  const { quizId } = useParams();
  console.log(quizId);

  if (!quiz) return null;

  return (
    <QuizLayout>
      <div>
        <div className="container !mx-auto">
          <div className=" justify-between">
            <Typography className="!font-bold !text-2xl !text-neutral-textPrimary !mb-4">
              {quiz.title}
            </Typography>
            <div className="space-x-2 !mb-3">
              <Chip
                icon={
                  <AccessAlarmIcon className=" !text-neutral-textSecondary" />
                }
                label={"Duration: " + quiz.duration + " minutes"}
                className="!bg-white !text-base !text-neutral-textSecondary"
              />
              <Chip
                icon={
                  <HelpOutlineOutlinedIcon className=" !text-neutral-textSecondary" />
                }
                label={quiz.questions.$values.length + " questions"}
                className="!bg-white !text-base !text-neutral-textSecondary"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-start space-y-6">
              <InstructionCard duration={quiz.duration} />
            </div>
          </div>
          <Divider className="!my-4" />
        </div>
      </div>
    </QuizLayout>
  );
};

export default QuizInstructions;
