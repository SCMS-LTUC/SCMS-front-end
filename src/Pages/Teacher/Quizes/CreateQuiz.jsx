import { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Question from './Question';

const CreateQuiz = () => {
    const [quizTitle, setQuizTitle] = useState('');
    const [visibility, setVisibility] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [duration, setDuration] = useState('');
    const [marks, setMarks] = useState('');
    const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correctOption: '' }]);

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: '', options: ['', '', '', ''], correctOption: '' }]);
    };

    const handleRemoveQuestion = (index) => {
        setQuestions(questions.filter((_, i) => i !== index));
    };

    const handleQuestionChange = (index, updatedQuestion) => {
        setQuestions(questions.map((q, i) => (i === index ? updatedQuestion : q)));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ quizTitle, visibility, startDate, endDate, duration, marks, questions });
    };

    return (
        <div className="bg-neutral-background min-h-screen p-5">
            <h1 className="text-neutral-textPrimary text-2xl font-bold mb-5">Create Quiz</h1>
            <form onSubmit={handleSubmit} className="bg-neutral-surface p-4 rounded-lg shadow-md">
                <div className="mb-4" >
                    <TextField label="Quiz Title" value={quizTitle} onChange={(e) => setQuizTitle(e.target.value)} fullWidth required />
                </div>
                <div className="mb-4" >
                    <FormControl fullWidth required className="mb-4">
                        <InputLabel id="visibility-label">Visibility</InputLabel>
                        <Select labelId="visibility-label" value={visibility} onChange={(e) => setVisibility(e.target.value)} label="Visibility">
                            <MenuItem value="public">Visible</MenuItem>
                            <MenuItem value="private">Hidden</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="mb-4" >
                    <TextField label="Start Date & Time" type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} fullWidth required InputLabelProps={{ shrink: true }} />
                </div>
                <div className="mb-4" >
                    <TextField label="End Date & Time" type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} fullWidth required InputLabelProps={{ shrink: true }} />
                </div>
                <div className="mb-4" >
                    <TextField label="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} fullWidth required />
                </div>
                <div className="mb-4" >
                    <TextField label="Marks" value={marks} onChange={(e) => setMarks(e.target.value)} fullWidth required />
                </div>

                <h2 className="text-neutral-textPrimary text-lg font-bold mb-3">Questions</h2>
                {questions.map((q, index) => (
                    <Question
                        key={index}
                        question={q}
                        index={index}
                        onChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}
                        onRemove={() => handleRemoveQuestion(index)}
                    />
                ))}

                <Button variant="contained" type="submit" className="bg-primary-DEFAULT hover:bg-primary-dark text-white">
                    Create Quiz
                </Button>
            </form>
        </div>
    );
};

export default CreateQuiz;
