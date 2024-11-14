import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import QuizIcon from "@mui/icons-material/Quiz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SubmissionsIcon from "@mui/icons-material/AssignmentTurnedIn";
import { useState } from "react";

// Updated Mock Data with Questions and Options
const initialQuizzes = [
  {
    id: 1,
    title: "React Basics",
    status: "Visible",
    time: "30 minutes",
    totalMarks: 100,
    date: "2024-10-01",
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
        correctOption: 1, // Index of the correct option
      },
      {
        id: 102,
        questionText:
          "Which hook is used for state management in functional components?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctOption: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    status: "Hidden",
    time: "45 minutes",
    totalMarks: 150,
    date: "2024-10-15",
    questions: [
      {
        id: 201,
        questionText: "What is the output of `typeof NaN`?",
        options: ['"number"', '"NaN"', '"undefined"', '"object"'],
        correctOption: 0,
      },
      {
        id: 202,
        questionText: "Which method converts JSON data to JavaScript objects?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.convert()",
          "JSON.toObject()",
        ],
        correctOption: 0,
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    status: "Visible",
    time: "60 minutes",
    totalMarks: 200,
    date: "2024-11-05",
    questions: [
      {
        id: 301,
        questionText: "What does UX stand for?",
        options: [
          "User Experience",
          "User Execution",
          "Universal Experience",
          "Unified Execution",
        ],
        correctOption: 0,
      },
      {
        id: 302,
        questionText: "Which principle focuses on reducing user memory load?",
        options: [
          "Consistency",
          "Feedback",
          "Visibility",
          "Recognition rather than recall",
        ],
        correctOption: 3,
      },
    ],
  },
];

const CourseQuizzes = () => {
  const [quizzes, setQuizzes] = useState(initialQuizzes);
  const navigate = useNavigate();

  const handleEdit = (quizId) => {
    const selectedQuiz = quizzes.find((quiz) => quiz.id === quizId);
    navigate(`${quizId}/edit-quiz`, { state: { quiz: selectedQuiz } });
  };

  const handleDelete = (quizId) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      setQuizzes(quizzes.filter((quiz) => quiz.id !== quizId));
    }
  };

  const handleViewSubmissions = (quizId) => {
    navigate(`${quizId}/view-submissions`);
  };

  return (
    <Box
      sx={{ backgroundColor: "background.default", minHeight: "100vh", p: 5 }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}>
        <Typography variant="h5">Available Quizzes</Typography>
        <Button
          variant="contained"
          component={Link}
          to="/course-details/:courseName/quizzes/create-quiz"
          color="primary"
          aria-label="Add Quiz"
          startIcon={<AddIcon />}
        >
          Create Quiz
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Total Marks</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quizzes.map((quiz) => (
              <TableRow key={quiz.id}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <QuizIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle1">{quiz.title}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{quiz.status}</TableCell>
                <TableCell>{quiz.time}</TableCell>
                <TableCell>{quiz.totalMarks}</TableCell>
                <TableCell>{quiz.date}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon />}
                    sx={{ mr: 1 }}
                    onClick={() => handleEdit(quiz.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    sx={{ mr: 1 }}
                    onClick={() => handleDelete(quiz.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="text"
                    color="secondary"
                    startIcon={<SubmissionsIcon />}
                    onClick={() => handleViewSubmissions(quiz.id)}
                  >
                    View Submissions
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {quizzes.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No quizzes available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

CourseQuizzes.propTypes = {};

export default CourseQuizzes;
