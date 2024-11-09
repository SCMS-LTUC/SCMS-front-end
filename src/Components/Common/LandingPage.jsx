// src/Components/Common/LandingPage.jsx
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/course-details');
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Box>
        <Typography variant="h3" gutterBottom>
          Welcome to Course Management
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Manage your courses efficiently and effectively.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleGetStarted}
          sx={{ mt: 4 }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;