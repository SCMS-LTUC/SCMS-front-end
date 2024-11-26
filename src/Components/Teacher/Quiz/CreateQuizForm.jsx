import { useState } from "react";
import { Box, Button, TextField, Typography, Checkbox, FormControlLabel } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useParams } from "react-router-dom";
import { useCreateQuiz } from "../../../Logic/Teacher/useQuizzes"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom";

const CreateQuiz = () => {
  const { courseId } = useParams();
  const { addQuiz, status, error } = useCreateQuiz();
  const navigate = useNavigate();
  const [quizTitle, setQuizTitle] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");
  const [marks, setMarks] = useState("");
  const [questions, setQuestions] = useState([
    { questionId: 0, text: "", quizId: 0, answerOptions: [{ answerOptionId: 0, text: "", isCorrect: false, questionId: 0 }] },
  ]);

  const handleQuestionChange = (index, updatedQuestion) => {
    setQuestions(questions.map((q, i) => (i === index ? updatedQuestion : q)));
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionId: 0,
        text: "",
        quizId: 0,
        answerOptions: [
          { answerOptionId: 0, text: "", isCorrect: false, questionId: 0 },
        ],
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleAddAnswerOption = (qIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answerOptions.push({
      answerOptionId: 0,
      text: "",
      isCorrect: false,
      questionId: 0,
    });
    setQuestions(updatedQuestions);
  };

  const handleRemoveAnswerOption = (qIndex, aIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answerOptions = updatedQuestions[qIndex].answerOptions.filter((_, i) => i !== aIndex);
    setQuestions(updatedQuestions);
  };

  const handleAnswerOptionChange = (qIndex, aIndex, event) => {
    const { name, value, type, checked } = event.target;
    const updatedQuestions = [...questions];
    if (name === "isCorrect" && checked) {
      // Ensure only one option can be correct
      updatedQuestions[qIndex].answerOptions = updatedQuestions[qIndex].answerOptions.map((ao, i) => ({
        ...ao,
        isCorrect: i === aIndex,
      }));
    } else {
      updatedQuestions[qIndex].answerOptions[aIndex][name] = type === "checkbox" ? checked : value;
    }
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quiz = {
      quizId: 0,
      title: quizTitle,
      duration,
      mark: marks,
      startTime: startDate,
      endTime: endDate,
      isVisible,
      courseId,
      questions: questions.map((question) => ({
        questionId: question.questionId,
        text: question.text,
        quizId: question.quizId,
        answerOptions: (question.answerOptions || []).map((answerOption) => ({
          answerOptionId: answerOption.answerOptionId,
          text: answerOption.text,
          isCorrect: answerOption.isCorrect,
          questionId: answerOption.questionId,
        })),
      })),
    };
    addQuiz(quiz);
    navigate(`/course-details/${courseId}/quizzes`);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {error}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow-md">
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
        {questions.map((q, qIndex) => (
          <Box key={qIndex} className="mb-4">
            <TextField
              label="Question Text"
              name="text"
              value={q.text}
              onChange={(e) => handleQuestionChange(qIndex, { ...q, text: e.target.value })}
              fullWidth
              variant="outlined"
              className="!mb-4"
              required
            />
            {q.answerOptions.map((a, aIndex) => (
              <Box key={aIndex} className="mb-2">
                <TextField
                  label="Answer Option Text"
                  name="text"
                  value={a.text}
                  onChange={(e) => handleAnswerOptionChange(qIndex, aIndex, e)}
                  fullWidth
                  variant="outlined"
                  className="!mb-2"
                  required
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="isCorrect"
                      checked={a.isCorrect}
                      onChange={(e) => handleAnswerOptionChange(qIndex, aIndex, e)}
                      color="primary"
                    />
                  }
                  label="Correct"
                />
                <Button variant="outlined" onClick={() => handleRemoveAnswerOption(qIndex, aIndex)}>Remove Option</Button>
              </Box>
            ))}
            <Button variant="outlined" onClick={() => handleAddAnswerOption(qIndex)}>Add Answer Option</Button>
            <Button variant="outlined" onClick={() => handleRemoveQuestion(qIndex)}>Remove Question</Button>
          </Box>
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
