import { Link } from 'react-router-dom';
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
} from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import { useState } from 'react';

// Mock Quizzes Data
const mockQuizzes = [
  {
    id: 1,
    title: 'React Basics',
    status: 'Visible',
    time: '30 minutes',
    totalMarks: 100,
    date: '2024-10-01',
    questions: [
      // Questions...
    ],
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    status: 'Hidden',
    time: '45 minutes',
    totalMarks: 150,
    date: '2024-10-15',
    questions: [
      // Questions...
    ],
  },
  // Add more quizzes as needed
];

const StudentQuizzes = () => {
  const [quizzes] = useState(mockQuizzes);

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', p: 5 }}>
      <Typography variant="h5" gutterBottom>
        Available Quizzes
      </Typography>

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
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <QuizIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle1">{quiz.title}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{quiz.status}</TableCell>
                <TableCell>{quiz.time}</TableCell>
                <TableCell>{quiz.totalMarks}</TableCell>
                <TableCell>{quiz.date}</TableCell>
                <TableCell>
                  {quiz.status === 'Visible' && (
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/student/take-quiz/${quiz.id}`}
                      startIcon={<QuizIcon />}
                    >
                      Take Quiz
                    </Button>
                  )}
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

export default StudentQuizzes;