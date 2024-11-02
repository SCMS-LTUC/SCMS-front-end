import { Box, Typography, List, ListItem } from '@mui/material';

const Grades = () => {
  // Mock data
  const assignments = [
    { name: 'Assignment 1', grade: 85 },
    { name: 'Assignment 2', grade: 90 },
    { name: 'Assignment 3', grade: 78 },
  ];

  const quizzes = [
    { name: 'Quiz 1', grade: 88 },
    { name: 'Quiz 2', grade: 92 },
  ];

  // Calculate averages
  const average = (grades) =>
    grades.reduce((acc, curr) => acc + curr.grade, 0) / grades.length;

  const averageAssignments = average(assignments);
  const averageQuizzes = average(quizzes);
  const overallGrade = ((averageAssignments + averageQuizzes) / 2).toFixed(2);

  return (
    <div className="grades-container flex flex-col gap-4 p-4">
      {/* Overall Grade Container */}
      <Box className="overall-grade border p-4 shadow-md">
        <Typography variant="h5">Overall Grade</Typography>
        <Typography variant="h2">{overallGrade}</Typography>
      </Box>
      
      {/* Assignments Grades Container */}
      <Box className="assignments-grades border p-4 shadow-md">
        <Typography variant="h5">Assignments Grades</Typography>
        <List>
          {assignments.map((assignment, index) => (
            <ListItem key={index}>
              {assignment.name}: {assignment.grade}
            </ListItem>
          ))}
        </List>
        <Typography variant="subtitle1">Average: {averageAssignments.toFixed(2)}</Typography>
      </Box>
      
      {/* Quizzes Grades Container */}
      <Box className="quizzes-grades border p-4 shadow-md">
        <Typography variant="h5">Quizzes Grades</Typography>
        <List>
          {quizzes.map((quiz, index) => (
            <ListItem key={index}>
              {quiz.name}: {quiz.grade}
            </ListItem>
          ))}
        </List>
        <Typography variant="subtitle1">Average: {averageQuizzes.toFixed(2)}</Typography>
      </Box>
    </div>
  );
};

export default Grades;