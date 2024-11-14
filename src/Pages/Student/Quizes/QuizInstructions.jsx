// src/Pages/Student/Quizes/QuizInstructions.jsx

import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Typography,
  Button,
  Box,
  Paper,
} from '@mui/material';

const QuizInstructions = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);

  // Mock Quizzes Data (Replace with actual data fetching in real scenarios)
  const mockQuizzes = [
    {
      id: 1,
      title: 'React Basics',
      time: '30 minutes',
      totalMarks: 100,
      startDate: '2024-09-01T09:00',
      endDate: '2024-09-30T23:59',
      instructions: 'Please read each question carefully. You have 30 minutes to complete the quiz.',
      questions: [
        // Questions...
      ],
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      time: '45 minutes',
      totalMarks: 150,
      startDate: '2024-10-15T09:00',
      endDate: '2024-10-20T23:59',
      instructions: 'This quiz covers advanced topics in JavaScript. Ensure you understand closures, async programming, and ES6+ features.',
      questions: [
        // Questions...
      ],
    },
    {
      id: 3,
      title: 'UI/UX Design Principles',
      time: '60 minutes',
      totalMarks: 200,
      startDate: '2024-11-05T09:00',
      endDate: '2024-11-10T23:59',
      instructions: 'Focus on user-centered design principles. Analyze each scenario before answering.',
      questions: [
        // Questions...
      ],
    },
    // Add more quizzes as needed
  ];

  useEffect(() => {
    // Fetch the quiz based on quizId
    const selectedQuiz = mockQuizzes.find((q) => q.id === parseInt(quizId));
    if (selectedQuiz) {
      setQuiz(selectedQuiz);
    } else {
      // If quiz not found, navigate back to quizzes
      navigate('/student/quizzes');
    }
  }, [quizId, navigate, mockQuizzes]);

  if (!quiz) return null;

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', p: 5 }}>
      <Paper sx={{ p: 4, maxWidth: 800, margin: '0 auto' }}>
        <Typography variant="h4" gutterBottom>
          {quiz.title} - Instructions
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {quiz.instructions}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          <strong>Duration:</strong> {quiz.time}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          <strong>Total Marks:</strong> {quiz.totalMarks}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            component={Link}
            to="/student/quizzes"
          >
            Back to Quizzes
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/student/take-quiz/${quiz.id}`}
          >
            Start Quiz
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default QuizInstructions;