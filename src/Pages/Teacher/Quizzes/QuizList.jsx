import { Button, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import QuizTable from "../../../Components/Teacher/Quiz/QuizTable";
import { useQuizzes } from "../../../Logic/Teacher/useQuizzes";
import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

export default function QuizList() {
  const { courseId } = useParams();
  const { quizzes, status, error } = useQuizzes();
  // console.log("quizzes from quiz list page", quizzes);
  const Navigate = useNavigate();
  // const [key, setKey] = useState(0);
  // console.log(key);
  // useEffect(() => {
  //   // Force re-render when quizzes change
  //   setKey((prevKey) => prevKey + 1);
  // }, [quizzes]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  // const initialQuizzes = [
  //   {
  //     id: 1,
  //     title: "React Basics",
  //     visible: true,
  //     time: "30 minutes",
  //     totalMarks: 100,
  //     date: "2024-10-01",
  //     participants: 20,
  //     questions: [
  //       {
  //         id: 101,
  //         questionText: "What is JSX?",
  //         options: [
  //           "A JavaScript library",
  //           "A syntax extension for JavaScript",
  //           "A CSS framework",
  //           "None of the above",
  //         ],
  //         correctOption: 1, // Index of the correct option
  //       },
  //       {
  //         id: 102,
  //         questionText:
  //           "Which hook is used for state management in functional components?",
  //         options: ["useEffect", "useState", "useContext", "useReducer"],
  //         correctOption: 1,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Advanced JavaScript",
  //     visible: true,
  //     time: "45 minutes",
  //     totalMarks: 150,
  //     date: "2024-10-15",
  //     participants: 15,
  //     questions: [
  //       {
  //         id: 201,
  //         questionText: "What is the output of `typeof NaN`?",
  //         options: ['"number"', '"NaN"', '"undefined"', '"object"'],
  //         correctOption: 0,
  //       },
  //       {
  //         id: 202,
  //         questionText:
  //           "Which method converts JSON data to JavaScript objects?",
  //         options: [
  //           "JSON.parse()",
  //           "JSON.stringify()",
  //           "JSON.convert()",
  //           "JSON.toObject()",
  //         ],
  //         correctOption: 0,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "UI/UX Design Principles",
  //     visible: false,
  //     time: "60 minutes",
  //     totalMarks: 200,
  //     date: "2024-11-05",
  //     participants: 30,
  //     questions: [
  //       {
  //         id: 301,
  //         questionText: "What does UX stand for?",
  //         options: [
  //           "User Experience",
  //           "User Execution",
  //           "Universal Experience",
  //           "Unified Execution",
  //         ],
  //         correctOption: 0,
  //       },
  //       {
  //         id: 302,
  //         questionText: "Which principle focuses on reducing user memory load?",
  //         options: [
  //           "Consistency",
  //           "Feedback",
  //           "Visibility",
  //           "Recognition rather than recall",
  //         ],
  //         correctOption: 3,
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="flex flex-col justify-between !p-8">
      <div className="container space-y-6 !mx-auto">
        <div className="flex justify-between">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Quizzes
          </Typography>
          <div className="!flex !justify-end">
            <Button
              color="secondary"
              onClick={() =>
                Navigate(`/course-details/${courseId}/quizzes/create-quiz`)
              }
              className="!text-neutral-surface"
              variant="contained"
              startIcon={<AddIcon />}
            >
              Create
            </Button>
          </div>
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
