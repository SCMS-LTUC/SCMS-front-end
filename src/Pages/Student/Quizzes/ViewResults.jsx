// src/Pages/Student/Quizes/ViewResults.jsx

import { useParams, useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  Box,
  Paper,
} from '@mui/material';
import { useState, useEffect } from 'react';

// Mock Results Data (Replace with actual data fetching logic)
const mockResults = {
  1: {
    score: 85,
    total: 100,
    feedback: 'Great understanding of React basics!',
  },
  3: {
    score: 180,
    total: 200,
    feedback: 'Excellent grasp of UI/UX principles.',
  },
  // Add more results as needed
};

const ViewResults = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Fetch the result based on quizId
    // Replace this with actual data fetching (e.g., API call)
    const fetchedResult = mockResults[quizId];
    if (fetchedResult) {
      setResult(fetchedResult);
    } else {
      setResult(null);
    }
  }, [quizId]);

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', p: 5 }}>
      <Typography variant="h4" gutterBottom>
        Quiz Results
      </Typography>

      {result ? (
        <Paper sx={{ p: 4 }}>
          <Typography variant="h6">Score: {result.score} / {result.total}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Feedback: {result.feedback}
          </Typography>
        </Paper>
      ) : (
        <Typography>No results available for this quiz.</Typography>
      )}

      <Button variant="contained" onClick={() => navigate('/student/quizzes')} sx={{ mt: 4 }}>
        Back to Quizzes
      </Button>
    </Box>
  );
};

export default ViewResults;