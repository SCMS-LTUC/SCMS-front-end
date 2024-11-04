import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
} from "@mui/material";

// Mock Quizzes Data
const mockQuizzes = [
  {
    id: 1,
    title: "React Basics",
    questions: [
      {
        id: 101,
        questionText: "What is JSX?",
        options: [
          "A JavaScript library",
          "A syntax extension for JavaScript",
          "A CSS framework",
          "None of the above",
        ],
        correctOption: 1,
      },
      {
        id: 102,
        questionText: "What is JSX?",
        options: [
          "A JavaScript library",
          "A syntax extension for JavaScript",
          "A CSS framework",
          "None of the above",
        ],
        correctOption: 1,
      },
    ],
  },
  // Add more quizzes as needed
];

const TakeQuiz = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    // Fetch the quiz data based on quizId
    const selectedQuiz = mockQuizzes.find((q) => q.id === parseInt(quizId));
    if (selectedQuiz) {
      setQuiz(selectedQuiz);
    } else {
      // If quiz not found, navigate back
      navigate("/student/quizzes");
    }
  }, [quizId, navigate]);

  const handleOptionChange = (questionId, optionIndex) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let calculatedScore = 0;
    quiz.questions.forEach((question) => {
      if (answers[question.id] === question.correctOption) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    // Optionally, send the results to an API
  };

  // //edit dima
  // useEffect(() => {
  //   const quiz = {
  //     id: 1,
  //     title: "React Basics",
  //     status: "Visible",
  //     time: "30 minutes",
  //     totalMarks: 100,
  //     date: "2024-10-01",
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
  //   };
  //   setQuiz(quiz);
  // }, []);

  if (!quiz) return null;

  return (
    <Box
      sx={{ backgroundColor: "background.default", minHeight: "100vh", p: 5 }}
    >
      <Typography variant="h4" gutterBottom>
        {quiz.title}
      </Typography>

      <form onSubmit={handleSubmit}>
        {quiz.questions.map((question, index) => (
          <Paper key={question.id} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6">
              {index + 1}. {question.questionText}
            </Typography>
            <RadioGroup
              value={answers[question.id] ?? ""}
              onChange={(e) =>
                handleOptionChange(question.id, parseInt(e.target.value))
              }
            >
              {question.options.map((option, optIndex) => (
                <FormControlLabel
                  key={optIndex}
                  value={optIndex}
                  control={<Radio required />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </Paper>
        ))}

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>

      {score !== null && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5">
            You scored {score} out of {quiz.questions.length}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default TakeQuiz;
