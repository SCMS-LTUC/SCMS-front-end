import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  addQuestion,
  editQuestion,
  deleteQuestion,
  addAnswerOption,
  editAnswerOption,
  deleteAnswerOption,
  editQuiz,
} from "../../../Api/Teacher/QuizApi";
import NotificationSnackbar from "../../../Components/Common/NotificationSnackbar";

// Component to handle individual options
const OptionField = ({
  option,
  index,
  qIndex,
  handleOptionChange,
  handleRemoveOption,
}) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
    <TextField
      label={`Option ${index + 1}`}
      name="text"
      value={option.text}
      onChange={(e) => handleOptionChange(qIndex, "answerOptions", e, index)}
      fullWidth
      required
    />
    <FormControlLabel
      control={
        <Checkbox
          name="isCorrect"
          checked={option.isCorrect}
          onChange={(e) => handleOptionChange(qIndex, "answerOptions", e, index)}
          color="primary"
        />
      }
      label="Correct"
    />
    <IconButton
      onClick={() => handleRemoveOption(qIndex, index)}
      aria-label={`Delete Option ${index + 1}`}
      color="error"
    >
      <ClearIcon />
    </IconButton>
  </Box>
);

OptionField.propTypes = {
  option: PropTypes.shape({
    text: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  qIndex: PropTypes.number.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  handleRemoveOption: PropTypes.func.isRequired,
};

// Component to handle individual questions
const QuestionField = ({
  question,
  index,
  handleQuestionChange,
  handleAddOption,
  handleRemoveOption,
  handleRemoveQuestion,
}) => (
  <Box sx={{ border: "1px solid #ccc", borderRadius: 2, p: 2, mb: 3 }}>
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
      <Typography variant="h6">Question {index + 1}</Typography>
      <IconButton
        onClick={() => handleRemoveQuestion(index)}
        aria-label={`Delete Question ${index + 1}`}
        color="error"
      >
        <ClearIcon />
      </IconButton>
    </Box>
    <TextField
      label="Question Text"
      value={question.text}
      onChange={(e) =>
        handleQuestionChange(index, "text", e.target.value)
      }
      fullWidth
      required
      sx={{ mb: 2 }}
    />
    <Typography variant="subtitle1" sx={{ mb: 1 }}>
      Options:
    </Typography>
    {question.answerOptions.map((option, optIndex) => (
      <OptionField
        key={optIndex}
        option={option}
        index={optIndex}
        qIndex={index}
        handleOptionChange={handleQuestionChange}
        handleRemoveOption={handleRemoveOption}
      />
    ))}
    <Button
      variant="outlined"
      startIcon={<AddIcon />}
      onClick={() => handleAddOption(index)}
      color="secondary"
    >
      Add Option
    </Button>
  </Box>
);

QuestionField.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string.isRequired,
    answerOptions: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        isCorrect: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleQuestionChange: PropTypes.func.isRequired,
  handleAddOption: PropTypes.func.isRequired,
  handleRemoveOption: PropTypes.func.isRequired,
  handleRemoveQuestion: PropTypes.func.isRequired,
};

const EditQuiz = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("success");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Retrieve quiz data from navigation state
  const [quiz, setQuiz] = useState({
    id: "",
    title: "",
    status: true,
    startDate: "",
    endDate: "",
    duration: "",
    totalMarks: "",
    questions: [],
  });

  useEffect(() => {
    const existingQuiz = location.state?.quiz;
    if (existingQuiz) {
      setQuiz({
        id: existingQuiz.id,
        title: existingQuiz.title,
        status: existingQuiz.isVisible === true,
        startDate: existingQuiz.startTime || "",
        endDate: existingQuiz.endTime || "",
        duration: existingQuiz.duration || "",
        totalMarks: existingQuiz.mark,
        questions: existingQuiz.questions || [],
      });
    } else {
      // If no state is passed, navigate back to quizzes
      navigate(`/course-details/${courseId}/quizzes`);
    }
  }, [location.state, navigate]);

  // Handle input changes for quiz details
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setQuiz((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle changes within questions and options
  const handleQuestionChange = (qIndex, field, value, optIndex = null) => {
    const updatedQuestions = [...quiz.questions];
    if (field === "text") {
      updatedQuestions[qIndex].text = value;
    } else if (field === "answerOptions") {
      if (optIndex !== null) {
        if (value.target.name === "isCorrect" && value.target.checked) {
          // Ensure only one option can be correct
          updatedQuestions[qIndex].answerOptions = updatedQuestions[qIndex].answerOptions.map((ao, i) => ({
            ...ao,
            isCorrect: i === optIndex,
          }));
        } else {
          updatedQuestions[qIndex].answerOptions[optIndex][value.target.name] = value.target.type === "checkbox" ? value.target.checked : value.target.value;
        }
      }
    }
    setQuiz((prev) => ({
      ...prev,
      questions: updatedQuestions,
    }));
  };

  // Add a new option to a specific question
  const handleAddOption = (qIndex) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[qIndex].answerOptions.push({
      text: "",
      isCorrect: false,
    });
    setQuiz((prev) => ({
      ...prev,
      questions: updatedQuestions,
    }));
  };

  // Remove an option from a specific question
  const handleRemoveOption = (qIndex, optIndex) => {
    const updatedQuestions = [...quiz.questions];
    const optionId = updatedQuestions[qIndex].answerOptions[optIndex].answerOptionId;
    if (optionId) {
      dispatch(deleteAnswerOption(optionId));
    }
    updatedQuestions[qIndex].answerOptions = updatedQuestions[qIndex].answerOptions.filter(
      (_, i) => i !== optIndex
    );
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
        { text: "", answerOptions: [{ text: "", isCorrect: false }] },
      ],
    }));
  };

  // Remove a question
  const handleRemoveQuestion = async (qIndex) => {
    const questionToRemove = quiz.questions[qIndex];
    if (questionToRemove.questionId) {
      // Delete associated answer options
      if (
        questionToRemove.answerOptions &&
        questionToRemove.answerOptions.length > 0
      ) {
        for (const option of questionToRemove.answerOptions) {
          if (option.answerOptionId) {
            await dispatch(deleteAnswerOption(option.answerOptionId));
          }
        }
      }
      await dispatch(deleteQuestion(questionToRemove.questionId));
    }
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.filter((_, i) => i !== qIndex),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedQuiz = {
      title: quiz.title,
      duration: quiz.duration,
      isVisible: quiz.status,
      courseId: courseId,
    };
    dispatch(editQuiz({ quizId: quiz.id, quiz: updatedQuiz }));

   await quiz.questions.forEach((question) => {
      if (question.questionId) {
        dispatch(editQuestion({ questionId: question.questionId, question }));
      } else {
        var newQuestion = {
          text: question.text,
          quizId: quiz.id,
          answerOptions: question.answerOptions,
        };
       dispatch(addQuestion(newQuestion));
      }

      question.answerOptions.forEach((option) => {
        if (option.answerOptionId) {
          dispatch(editAnswerOption({ answerOptionId: option.answerOptionId, answerOption: option }));
        } else {
          console.log("Adding Answer Option:", option);
          var newOption = {
            text: option.text,
            isCorrect: option.isCorrect,
            questionId: question.questionId,
          };
          dispatch(addAnswerOption(newOption));
        }
      });
    });

    console.log("Updated Quiz:", updatedQuiz);
    console.log("Updated Quiz:", quiz);
    setSnackbarMessage("Quiz updated successfully!");
    setSnackbarType("success");
    setSnackbarOpen(true);
    navigate(`/course-details/${courseId}/quizzes`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-lg shadow-md"
    >
      <Typography className="mb-4 text-primary !font-bold !text-3xl">
        Edit Quiz
      </Typography>

      <Box className="mb-4">
        <TextField
          label="Quiz Title"
          name="title"
          value={quiz.title}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          className="!mb-4"
          required
        />
      </Box>

      <Box className="mb-4">
        <TextField
          label="Start Date & Time"
          name="startDate"
          type="datetime-local"
          value={quiz.startDate}
          onChange={handleChange}
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
          name="endDate"
          type="datetime-local"
          value={quiz.endDate}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          className="!mb-4"
          required
        />
      </Box>

      <Box className="mb-4">
        <TextField
          label="Duration"
          name="duration"
          value={quiz.duration}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          className="!mb-4"
          required
        />
      </Box>

      <Box className="mb-4">
        <TextField
          label="Total Marks"
          name="totalMarks"
          type="number"
          value={quiz.totalMarks}
          onChange={handleChange}
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
              checked={quiz.status}
              onChange={handleChange}
              name="status"
              color="primary"
            />
          }
          label="Visible"
        />
      </Box>

      <Box className="mb-4 space-y-2">
        <Typography className="!text-xl !font-bold !mb-2">Questions</Typography>
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

      <Box className="flex justify-end space-x-3">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="!text-white !rounded-md"
        >
          Save Changes
        </Button>
        <NotificationSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        type={snackbarType}
      />
      </Box>
    </form>
  );
};

EditQuiz.propTypes = {};

export default EditQuiz;
