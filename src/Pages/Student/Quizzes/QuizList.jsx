import { useParams } from "react-router-dom";
// import { useState } from "react";
import { Typography, Divider } from "@mui/material";
import QuizTable from "../../../Components/Student/Quiz/QuizTable";
import { useState, useEffect } from "react";

// the quizzes is the data from api/Quiz/course/{courseId}
//import { quizzess } from "../../../Logic/Student/Data";
import { useQuizzes } from "../../../Logic/Student/useQuizzes";

export default function QuizList() {
  const { courseId } = useParams();
  const { quizzes } = useQuizzes(courseId);
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey(key + 1);
  }, [quizzes]);
  return (
    <div className="flex flex-col justify-between !p-8">
      <div className="container space-y-6 !mx-auto">
        <div className="flex justify-between">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Quizzes
          </Typography>
        </div>
        <Divider className="!my-4" />
        <div>
          <div className="flex flex-col justify-start space-y-6">
            <QuizTable quizzes={quizzes} />
          </div>
        </div>
        <Divider className="!my-4" />
      </div>
    </div>
  );
}
