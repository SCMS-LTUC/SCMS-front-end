import { useParams, useNavigate } from 'react-router-dom';
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

// Mock Submissions Data
const mockSubmissions = {
  1: [
    { id: 101, studentName: 'John Doe', score: 85, date: '2024-10-02' },
    { id: 102, studentName: 'Jane Smith', score: 92, date: '2024-10-03' },
  ],
  2: [
    { id: 201, studentName: 'Alice Johnson', score: 78, date: '2024-10-16' },
    { id: 202, studentName: 'Bob Brown', score: 88, date: '2024-10-17' },
  ],
  3: [
    { id: 301, studentName: 'Charlie Davis', score: 95, date: '2024-11-06' },
    { id: 302, studentName: 'Diana Evans', score: 89, date: '2024-11-07' },
  ],
};

const ViewSubmissions = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const submissions = mockSubmissions[quizId] || [];

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', p: 5 }}>
      <Typography variant="h4" gutterBottom>
        View Submissions
      </Typography>

      {/* Back to Quizzes Button */}
      <Button
        variant="outlined"
        onClick={() => navigate('/quizzes')}
        sx={{ mb: 4 }}
      >
        &larr; Back to Quizzes
      </Button>

      {submissions.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Date Submitted</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>{submission.studentName}</TableCell>
                  <TableCell>{submission.score}</TableCell>
                  <TableCell>{submission.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>No submissions found for this quiz.</Typography>
      )}
    </Box>
  );
};

ViewSubmissions.propTypes = {};

export default ViewSubmissions;