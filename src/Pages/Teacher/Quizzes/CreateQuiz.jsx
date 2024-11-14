import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Question from "./Question";

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");
  const [marks, setMarks] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctOption: "" },
  ]);

  const navigate = useNavigate();

  // Calculate duration whenever startDate or endDate changes
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffMs = end - start;
      const diffMins = Math.floor((diffMs / 1000 / 60) % 60);
      const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      let calculatedDuration = "";
      if (diffDays > 0) {
        calculatedDuration += `${diffDays}d `;
      }
      if (diffHours > 0) {
        calculatedDuration += `${diffHours}h `;
      }
      if (diffMins > 0) {
        calculatedDuration += `${diffMins}m`;
      }
      setDuration(calculatedDuration.trim());
    } else {
      setDuration("");
    }
  }, [startDate, endDate]);

  const handleQuestionChange = (index, updatedQuestion) => {
    setQuestions(questions.map((q, i) => (i === index ? updatedQuestion : q)));
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctOption: "" },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      quizTitle,
      isVisible,
      startDate,
      endDate,
      duration,
      marks,
      questions,
    });
    // TODO: Implement quiz creation logic (e.g., API call)
  };

  return (
    <div className="bg-neutral-background min-h-screen p-5">
      <h1 className="text-neutral-textPrimary text-2xl font-bold mb-5">
        Create Quiz
      </h1>

      {/* Return to Quizzes Button */}
      <Button
        variant="contained"
        onClick={() => navigate("/course-details/:courseName/quizzes/")}
        className="mb-4"
      >
        Return to Quizzes
      </Button>

      <form
        onSubmit={handleSubmit}
        className="bg-neutral-surface p-4 rounded-lg shadow-md"
      >
        {/* Quiz Title */}
        <div className="mb-4">
          <TextField
            label="Quiz Title"
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
            fullWidth
            required
          />
        </div>

        {/* Visibility Checkbox */}
        <div className="mb-4">
          <FormControlLabel
            control={
              <Checkbox
                checked={isVisible}
                onChange={(e) => setIsVisible(e.target.checked)}
                color="primary"
              />
            }
            label="Visible"
          />
        </div>

        {/* Start Date & Time */}
        <div className="mb-4">
          <TextField
            label="Start Date & Time"
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
          />
        </div>

        {/* End Date & Time */}
        <div className="mb-4">
          <TextField
            label="End Date & Time"
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
          />
        </div>

        {/* Duration (Calculated) */}
        <div className="mb-4">
          <TextField
            label="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            fullWidth
            disabled
          />
        </div>

        {/* Total Marks */}
        <div className="mb-4">
          <TextField
            label="Total Marks"
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            fullWidth
            required
          />
        </div>

        {/* Questions Section */}
        <Box className="mb-4">
          <h2 className="text-lg font-bold mb-2">Questions</h2>
          {questions.map((q, index) => (
            <Question
              key={index}
              question={q}
              index={index}
              onChange={(updatedQuestion) =>
                handleQuestionChange(index, updatedQuestion)
              }
              onRemove={() => handleRemoveQuestion(index)}
            />
          ))}

          {/* Add Question Button */}
          <Button
            variant="contained"
            onClick={handleAddQuestion}
            startIcon={<AddIcon />}
            className="mt-2"
          >
            Add Question
          </Button>
        </Box>

        {/* Submit Button */}
        <Button
          variant="contained"
          type="submit"
          className="bg-primary-DEFAULT hover:bg-primary-dark text-white"
        >
          Create Quiz
        </Button>
      </form>
    </div>
  );
};

export default CreateQuiz;
