import { TextField, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import PropTypes from "prop-types";
import Option from "./Option";

const Question = ({ question, index, onChange, onRemove }) => {
  const handleQuestionTextChange = (e) => {
    onChange({ ...question, question: e.target.value });
  };

  const handleOptionChange = (optionIndex, value) => {
    const updatedOptions = question.options.map((opt, i) =>
      i === optionIndex ? value : opt
    );
    onChange({ ...question, options: updatedOptions });
  };

  const handleAddOption = () => {
    onChange({ ...question, options: [...question.options, ""] });
  };

  const handleRemoveOption = (optionIndex) => {
    const updatedOptions = question.options.filter((_, i) => i !== optionIndex);
    onChange({ ...question, options: updatedOptions });
  };

  return (
    <div className="mb-4 p-4 border rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-md font-semibold">Question {index + 1}</h3>
        <IconButton onClick={onRemove} aria-label="Delete Question">
          <ClearIcon className="!text-accent-error" />
        </IconButton>
      </div>

      {/* Question Text */}
      <div className="mb-4">
        <TextField
          label="Question Text"
          value={question.question}
          onChange={handleQuestionTextChange}
          fullWidth
          required
        />
      </div>

      {/* Options */}
      {question.options.map((option, optionIndex) => (
        <Option
          key={optionIndex}
          index={optionIndex}
          value={option}
          onChange={(value) => handleOptionChange(optionIndex, value)}
          onRemove={() => handleRemoveOption(optionIndex)}
        />
      ))}

      {/* Add Option Button */}
      <Button
        variant="outlined"
        onClick={handleAddOption}
        startIcon={<AddIcon />}
        className="mt-2"
        color="secondary"
      >
        Add Option
      </Button>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    correctOption: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Question;
