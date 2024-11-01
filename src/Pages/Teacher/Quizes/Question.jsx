import { TextField, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Option from './Option';

const Question = ({ question, index, onChange, onRemove }) => {
    const handleQuestionTextChange = (e) => {
        onChange({ ...question, question: e.target.value });
    };

    const handleOptionChange = (optionIndex, value) => {
        const updatedOptions = question.options.map((opt, i) => (i === optionIndex ? value : opt));
        onChange({ ...question, options: updatedOptions });
    };

    return (
        <div className="mb-4">
            <div className="mb-4" >
                <TextField label={`Question ${index + 1}`} value={question.question} onChange={handleQuestionTextChange} fullWidth required />
            </div>
            {question.options.map((option, optionIndex) => (
                <Option key={optionIndex} index={optionIndex} value={option} onChange={(value) => handleOptionChange(optionIndex, value)} />
            ))}
            <div className="flex justify-between">
                <IconButton onClick={onRemove} aria-label="Delete Question">
                    <DeleteIcon />
                </IconButton>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={onChange}>
                    Add Option
                </Button>
            </div>
        </div>
    );
};

export default Question;
