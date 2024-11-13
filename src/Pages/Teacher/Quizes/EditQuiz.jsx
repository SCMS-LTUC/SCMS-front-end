import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

// Component to handle individual options
const OptionField = ({ option, index, handleOptionChange, handleRemoveOption }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
    <TextField
      label={`Option ${index + 1}`}
      value={option}
      onChange={(e) => handleOptionChange(index, e.target.value)}
      fullWidth
      required
    />
    <IconButton
      onClick={() => handleRemoveOption(index)}
      aria-label={`Delete Option ${index + 1}`}
      color="error"
    >
      <DeleteIcon />
    </IconButton>
  </Box>
);

OptionField.propTypes = {
  option: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  handleRemoveOption: PropTypes.func.isRequired,
};

// Component to handle individual questions
const QuestionField = ({ question, index, handleQuestionChange, handleAddOption, handleRemoveOption, handleRemoveQuestion }) => (
  <Box sx={{ border: '1px solid #ccc', borderRadius: 2, p: 2, mb: 3 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
      <Typography variant="h6">Question {index + 1}</Typography>
      <IconButton
        onClick={() => handleRemoveQuestion(index)}
        aria-label={`Delete Question ${index + 1}`}
        color="error"
      >
        <DeleteIcon />
      </IconButton>
    </Box>
    <TextField
      label="Question Text"
      value={question.questionText}
      onChange={(e) => handleQuestionChange(index, 'questionText', e.target.value)}
      fullWidth
      required
      sx={{ mb: 2 }}
    />
    <Typography variant="subtitle1" sx={{ mb: 1 }}>
      Options:
    </Typography>
    {question.options.map((option, optIndex) => (
      <OptionField
        key={optIndex}
        option={option}
        index={optIndex}
        handleOptionChange={(optIdx, value) => handleQuestionChange(index, 'options', value, optIdx)}
        handleRemoveOption={(optIdx) => handleRemoveOption(index, optIdx)}
      />
    ))}
    <Button
      variant="outlined"
      startIcon={<AddIcon />}
      onClick={() => handleAddOption(index)}
    >
      Add Option
    </Button>
  </Box>
);

QuestionField.propTypes = {
  question: PropTypes.shape({
    questionText: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    correctOption: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleQuestionChange: PropTypes.func.isRequired,
  handleAddOption: PropTypes.func.isRequired,
  handleRemoveOption: PropTypes.func.isRequired,
  handleRemoveQuestion: PropTypes.func.isRequired,
};

const EditQuiz = () => {
  //const { quizId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve quiz data from navigation state
  const [quiz, setQuiz] = useState({
    id: '',
    title: '',
    status: true,
    startDate: '',
    endDate: '',
    duration: '',
    totalMarks: '',
    questions: [],
  });

  useEffect(() => {
    const existingQuiz = location.state?.quiz;
    if (existingQuiz) {
      setQuiz({
        id: existingQuiz.id,
        title: existingQuiz.title,
        status: existingQuiz.status === 'Visible',
        startDate: existingQuiz.startDate || '',
        endDate: existingQuiz.endDate || '',
        duration: existingQuiz.duration || '',
        totalMarks: existingQuiz.totalMarks,
        questions: existingQuiz.questions || [],
      });
    } else {
      // If no state is passed, navigate back to quizzes
      navigate('/quizzes');
    }
  }, [location.state, navigate]);

  // Handle input changes for quiz details
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setQuiz((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle changes within questions and options
  const handleQuestionChange = (qIndex, field, value, optIndex = null) => {
    const updatedQuestions = [...quiz.questions];
    if (field === 'questionText') {
      updatedQuestions[qIndex].questionText = value;
    } else if (field === 'options') {
      updatedQuestions[qIndex].options[optIndex] = value;
    }
    setQuiz((prev) => ({
      ...prev,
      questions: updatedQuestions,
    }));
  };

  // Add a new option to a specific question
  const handleAddOption = (qIndex) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[qIndex].options.push('');
    setQuiz((prev) => ({
      ...prev,
      questions: updatedQuestions,
    }));
  };

  // Remove an option from a specific question
  const handleRemoveOption = (qIndex, optIndex) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[qIndex].options = updatedQuestions[qIndex].options.filter((_, i) => i !== optIndex);
    setQuiz((prev) => ({
      ...prev,
      questions: updatedQuestions,
    }));
  };

  // Add a new question
  const handleAddQuestion = () => {
    setQuiz((prev) => ({
      ...prev,
      questions: [
        ...prev.questions,
        { questionText: '', options: ['', '', '', ''], correctOption: 0 },
      ],
    }));
  };

  // Remove a question
  const handleRemoveQuestion = (qIndex) => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.filter((_, i) => i !== qIndex),
    }));
  };

  // Calculate duration based on start and end dates
  useEffect(() => {
    if (quiz.startDate && quiz.endDate) {
      const start = new Date(quiz.startDate);
      const end = new Date(quiz.endDate);
      const diffMs = end - start;
      if (diffMs > 0) {
        const diffMins = Math.floor((diffMs / 1000 / 60) % 60);
        const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        let calculatedDuration = '';
        if (diffDays > 0) {
          calculatedDuration += `${diffDays}d `;
        }
        if (diffHours > 0) {
          calculatedDuration += `${diffHours}h `;
        }
        if (diffMins > 0) {
          calculatedDuration += `${diffMins}m`;
        }
        setQuiz((prev) => ({
          ...prev,
          duration: calculatedDuration.trim(),
        }));
      } else {
        setQuiz((prev) => ({
          ...prev,
          duration: '',
        }));
      }
    } else {
      setQuiz((prev) => ({
        ...prev,
        duration: '',
      }));
    }
  }, [quiz.startDate, quiz.endDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Quiz:', quiz);
    alert('Quiz updated successfully!');
    navigate('/quizzes');
  };

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', p: 5 }}>
      <Typography variant="h4" gutterBottom>
        Edit Quiz
      </Typography>

      {/* Return to Quizzes Button */}
      <Button
        variant="outlined"
        onClick={() => navigate('/quizzes')}
        sx={{ mb: 4 }}
      >
        &larr; Back to Quizzes
      </Button>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {/* Quiz Title */}
        <Box sx={{ mb: 3 }}>
          <TextField
            label="Quiz Title"
            name="title"
            value={quiz.title}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>

        {/* Visibility Checkbox */}
        <Box sx={{ mb: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={quiz.status}
                onChange={handleChange}
                name="status"
                color="primary"
              />
            }
            label="Visible"
          />
        </Box>

        {/* Start Date & Time */}
        <Box sx={{ mb: 3 }}>
          <TextField
            label="Start Date & Time"
            name="startDate"
            type="datetime-local"
            value={quiz.startDate}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        {/* End Date & Time */}
        <Box sx={{ mb: 3 }}>
          <TextField
            label="End Date & Time"
            name="endDate"
            type="datetime-local"
            value={quiz.endDate}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
          />
        </Box>

        {/* Duration (Calculated) */}
        <Box sx={{ mb: 3 }}>
          <TextField
            label="Duration"
            name="duration"
            value={quiz.duration}
            onChange={(e) => setQuiz({ ...quiz, duration: e.target.value })}
            fullWidth
            disabled
          />
        </Box>

        {/* Total Marks */}
        <Box sx={{ mb: 3 }}>
          <TextField
            label="Total Marks"
            name="totalMarks"
            type="number"
            value={quiz.totalMarks}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>

        {/* Questions Section */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Questions</Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddQuestion}
            >
              Add Question
            </Button>
          </Box>
          {quiz.questions.map((question, index) => (
            <QuestionField
              key={index}
              question={question}
              index={index}
              handleQuestionChange={handleQuestionChange}
              handleAddOption={handleAddOption}
              handleRemoveOption={handleRemoveOption}
              handleRemoveQuestion={handleRemoveQuestion}
            />
          ))}
        </Box>

        {/* Submit Button */}
        <Button
          variant="contained"
          type="submit"
          color="primary"
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

EditQuiz.propTypes = {};

export default EditQuiz;