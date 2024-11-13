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
  Grid,
  Chip,
} from "@mui/material";

// Mock Quizzes Data
const mockQuizzes = [
  {
    id: 3,
    title: "React Basics",
    time: "1 minutes",
    totalMarks: 100,
    startDate: "2024-09-01T09:00",
    endDate: "2024-09-30T23:59",
    instructions:
      "Please read each question carefully. You have 30 minutes to complete the quiz.",
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
        questionText: "What is React?",
        options: [
          "A back-end framework",
          "A front-end library",
          "A database",
          "All of the above",
        ],
        correctOption: 1,
      },
      {
        id: 103,
        questionText: "What is the purpose of render() in React?",
        options: [
          "To render the component in the DOM",
          "To update the component state",
          "To perform a side effect in the component",
          "None of the above",
        ],
        correctOption: 0,
      },
      {
        id: 104,
        questionText: "What is the virtual DOM?",
        options: [
          "A lightweight version of the actual DOM",
          "A representation of the UI in memory",
          "A type of DOM manipulation",
          "None of the above",
        ],
        correctOption: 1,
      },
      // Add more questions as needed
    ],
  },
  // Add more quizzes as needed
];

const TakeQuiz = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0); // in seconds

  // Fetch Quiz Data
  useEffect(() => {
    const selectedQuiz = mockQuizzes.find((q) => q.id === parseInt(quizId, 10));
    if (selectedQuiz) {
      setQuiz(selectedQuiz);
      // Initialize Timer
      const [minutes] = selectedQuiz.time.split(" ");
      setTimeLeft(parseInt(minutes, 10) * 60);
    } else {
      navigate("/student/quizzes");
    }
  }, [quizId, navigate]);

  // Timer Effect
  useEffect(() => {
    if (!quiz || isSubmitted) return;

    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quiz, isSubmitted]);

  const handleOptionChange = (questionId, optionIndex) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleSubmit = () => {
    if (!quiz) return;

    let calculatedScore = 0;
    quiz.questions.forEach((question) => {
      if (answers[question.id] === question.correctOption) {
        calculatedScore += 1; // Assuming 1 mark per correct answer
      }
    });

    setScore(calculatedScore);
    setIsSubmitted(true);

    // Save the result in localStorage
    const submittedQuizzes =
      JSON.parse(localStorage.getItem("submittedQuizzes")) || {};
    submittedQuizzes[quizId] = {
      score: calculatedScore,
      total: quiz.totalMarks,
      date: new Date().toISOString(),
    };
    localStorage.setItem("submittedQuizzes", JSON.stringify(submittedQuizzes));
  };

  const handleNavigateQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  if (!quiz) return null;

  if (isSubmitted && score !== null) {
    return (
      <Box
        sx={{ backgroundColor: "background.default", minHeight: "100vh", p: 5 }}
      >
        <Typography variant="h4" gutterBottom>
          Quiz Submitted
        </Typography>

        <Paper sx={{ p: 4, mb: 3 }}>
          <Typography variant="h6">
            Your Score: {score} / {quiz.totalMarks}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Date: {new Date().toLocaleString()}
          </Typography>
        </Paper>

        <Button
          variant="contained"
          onClick={() => navigate("/student/quizzes")}
          sx={{ mt: 2 }}
        >
          Back to Quizzes
        </Button>
      </Box>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Box
      sx={{ backgroundColor: "background.default", minHeight: "100vh", p: 5 }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            {quiz.title}
          </Typography>
        </Grid>
        <Grid item>
          <Chip
            label={`Time Left: ${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
            color={timeLeft <= 60 ? "error" : "primary"}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {/* Question Navigator */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Questions
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {quiz.questions.map((question, index) => (
                <Button
                  key={question.id}
                  variant={
                    currentQuestionIndex === index ? "contained" : "outlined"
                  }
                  color={
                    answers[question.id] !== undefined ? "primary" : "default"
                  }
                  onClick={() => handleNavigateQuestion(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Current Question */}
        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h6">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
              {currentQuestion.questionText}
            </Typography>
            <RadioGroup
              value={answers[currentQuestion.id] ?? ""}
              onChange={(e) =>
                handleOptionChange(
                  currentQuestion.id,
                  parseInt(e.target.value, 10)
                )
              }
            >
              {currentQuestion.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={index}
                  control={<Radio required />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </Paper>

          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              variant="outlined"
              onClick={() =>
                setCurrentQuestionIndex((prev) => (prev > 0 ? prev - 1 : prev))
              }
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>
            {currentQuestionIndex < totalQuestions - 1 ? (
              <Button
                variant="outlined"
                onClick={() =>
                  setCurrentQuestionIndex((prev) =>
                    prev < totalQuestions - 1 ? prev + 1 : prev
                  )
                }
                disabled={answers[currentQuestion.id] === undefined}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={quiz.questions.some(
                  (q) => answers[q.id] === undefined
                )}
              >
                Submit Quiz
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TakeQuiz;
