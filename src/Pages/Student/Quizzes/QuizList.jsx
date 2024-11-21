import { useParams } from "react-router-dom";
// import { useState } from "react";
import { Typography, Divider } from "@mui/material";
import QuizTable from "../../../Components/Student/Quiz/QuizTable";

// the quizzes is the data from api/Quiz/course/{courseId}
import { quizzes } from "../../../Logic/Student/Data";

export default function AnnouncementList() {
  const { courseId } = useParams();
  console.log(courseId);

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
            <QuizTable quizzes={quizzes.$values} />
          </div>
        </div>
        <Divider className="!my-4" />
      </div>
    </div>
  );
}
