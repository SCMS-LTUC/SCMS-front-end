import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
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
    { question: "", options: ["", ""], correctOption: "" },
  ]);

  // const navigate = useNavigate();

  // Calculate duration whenever startDate or endDate changes
  //   useEffect(() => {
  //     if (startDate && endDate) {
  //       const start = new Date(startDate);
  //       const end = new Date(endDate);
  //       const diffMs = end - start;
  //       const diffMins = Math.floor((diffMs / 1000 / 60) % 60);
  //       const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  //       const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  //       let calculatedDuration = "";
  //       if (diffDays > 0) {
  //         calculatedDuration += `${diffDays}d `;
  //       }
  //       if (diffHours > 0) {
  //         calculatedDuration += `${diffHours}h `;
  //       }
  //       if (diffMins > 0) {
  //         calculatedDuration += `${diffMins}m`;
  //       }
  //       setDuration(calculatedDuration.trim());
  //     } else {
  //       setDuration("");
  //     }
  //   }, [startDate, endDate]);

  const handleQuestionChange = (index, updatedQuestion) => {
    setQuestions(questions.map((q, i) => (i === index ? updatedQuestion : q)));
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", ""], correctOption: "" },
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
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-lg shadow-md"
    >
      <Typography className="mb-4 text-primary !font-bold !text-3xl">
        Create Quiz
      </Typography>

      <Box className="mb-4">
        <TextField
          label="Quiz Title"
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
          fullWidth
          variant="outlined"
          required
          className="!mb-4"
        />
      </Box>

      <Box className="mb-4">
        <TextField
          label="Start Date & Time"
          type="datetime-local"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          className="!mb-4"
          required
        />
      </Box>

      <Box className="mb-4">
        <TextField
          label="End Date & Time"
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          className="!mb-4"
          required
        />
      </Box>

      <Box className="mb-4">
        <TextField
          label="Duration in Minutes"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          fullWidth
          variant="outlined"
          className="!mb-4"
          required
        />
      </Box>

      <Box className="mb-4">
        <TextField
          label="Full Mark"
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          fullWidth
          variant="outlined"
          className="!mb-4"
          required
        />
      </Box>

      <Box className="mb-4">
        <FormControlLabel
          control={
            <Checkbox
              checked={isVisible}
              onChange={(e) => setIsVisible(e.target.checked)}
              name="visible"
              color="primary"
            />
          }
          label="Visible"
        />
      </Box>

      <Box className="mb-4 space-y-2">
        <Typography className="!text-xl !font-bold !mb-2">Questions</Typography>
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
        <Button
          variant="contained"
          onClick={handleAddQuestion}
          startIcon={<AddIcon />}
          className="mt-2 !text-white"
          color="secondary"
        >
          Add Question
        </Button>
      </Box>

      <Box className="flex justify-end">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="!text-white !rounded-md"
        >
          Create Quiz
        </Button>
      </Box>
    </form>
  );
};

export default CreateQuiz;
