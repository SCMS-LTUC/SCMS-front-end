import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
  Grid,
  Chip,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import { useState } from "react";
import { format } from "date-fns"; // For date formatting

// Mock Quizzes Data
const mockQuizzes = [
  {
    id: 1,
    title: "React Basics",
    time: "30 minutes",
    totalMarks: 100,
    startDate: "2024-09-01T09:00", // ISO format YYYY-MM-DDTHH:mm
    endDate: "2024-09-30T23:59",
    instructions:
      "Please read each question carefully. You have 30 minutes to complete the quiz.",
    questions: [
      // Questions...
    ],
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    time: "45 minutes",
    totalMarks: 150,
    startDate: "2024-12-15T09:00",
    endDate: "2024-12-20T23:59",
    instructions:
      "This quiz covers advanced topics in JavaScript. Ensure you understand closures, async programming, and ES6+ features.",
    questions: [
      // Questions...
    ],
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    time: "60 minutes",
    totalMarks: 200,
    startDate: "2024-11-05T09:00",
    endDate: "2024-11-15T23:59",
    instructions:
      "Focus on user-centered design principles. Analyze each scenario before answering.",
    questions: [
      // Questions...
    ],
  },
  // Add more quizzes as needed
];

const StudentQuizzes = () => {
  const [quizzes] = useState(mockQuizzes);

  // Get current date and time
  const currentDate = new Date();

  // Function to determine the status of a quiz
  const getQuizStatus = (quiz) => {
    const start = new Date(quiz.startDate);
    const end = new Date(quiz.endDate);

    if (currentDate < start) {
      return "Upcoming";
    } else if (currentDate >= start && currentDate <= end) {
      return "Available";
    } else {
      return "Completed";
    }
  };

  // Compute status for each quiz
  const quizzesWithStatus = quizzes.map((quiz) => ({
    ...quiz,
    computedStatus: getQuizStatus(quiz),
  }));

  return (
    <Box
      sx={{ backgroundColor: "background.default", minHeight: "100vh", p: 5 }}
    >
      <Typography variant="h5" gutterBottom>
        Available Quizzes
      </Typography>

      <Grid container spacing={3}>
        {quizzesWithStatus.length > 0 ? (
          quizzesWithStatus.map((quiz) => (
            <Grid item xs={12} sm={6} md={4} key={quiz.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <QuizIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">{quiz.title}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Time:</strong> {quiz.time}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Total Marks:</strong> {quiz.totalMarks}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Start Date:</strong>{" "}
                    {format(new Date(quiz.startDate), "PPP p")}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>End Date:</strong>{" "}
                    {format(new Date(quiz.endDate), "PPP p")}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Chip
                      label={quiz.computedStatus}
                      color={
                        quiz.computedStatus === "Available"
                          ? "success"
                          : quiz.computedStatus === "Upcoming"
                            ? "warning"
                            : "default"
                      }
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
                <CardActions sx={{ mt: "auto", justifyContent: "flex-end" }}>
                  {quiz.computedStatus === "Available" && (
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/student/quiz-instructions/${quiz.id}`}
                      startIcon={<QuizIcon />}
                    >
                      Start Quiz
                    </Button>
                  )}
                  {quiz.computedStatus === "Completed" && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      component={Link}
                      to={`/student/view-results/${quiz.id}`}
                    >
                      View Results
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography>No quizzes available.</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default StudentQuizzes;
