import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IconButton, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CourseQuizzes = () => {
    // Sample data for quizzes and student submissions
    const quizzes = [
        {
            title: 'Quiz Title 1',
            visibility: 'Public',
            duration: '30 mins',
            marks: 100,
            date: '2024-10-31',
            submissions: [
                { studentName: 'John Doe', score: 85 },
                { studentName: 'Jane Smith', score: 90 },
            ],
        },
        {
            title: 'Quiz Title 2',
            visibility: 'Private',
            duration: '45 mins',
            marks: 100,
            date: '2024-10-30',
            submissions: [
                { studentName: 'Alice Brown', score: 75 },
                { studentName: 'Bob Johnson', score: 95 },
            ],
        },
    ];

    return (
        <div className="bg-neutral-background min-h-screen p-5">
            <h1 className="text-neutral-textPrimary text-2xl font-bold mb-5">Course Quizzes</h1>

            <div className="flex justify-between items-center mb-5">
                <h2 className="text-neutral-textPrimary text-xl">Available Quizzes</h2>
                <IconButton
                    component={Link}
                    to="/create-quiz"
                    className="bg-primary-DEFAULT hover:bg-primary-dark text-white"
                    aria-label="Add Quiz"
                >
                    <AddIcon />
                </IconButton>

            </div>

            <div className="flex flex-col">
                {quizzes.map((quiz, index) => {
                    const [expanded, setExpanded] = useState(false);

                    const handleAccordionChange = () => {
                        setExpanded(!expanded);
                    };

                    return (
                        <Accordion key={index} expanded={expanded} onChange={handleAccordionChange} className="mb-4">
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <QuizIcon className="text-primary-DEFAULT mr-2" />
                                        <Typography variant="h6" className="text-neutral-textPrimary">
                                            {quiz.title}
                                        </Typography>
                                    </div>
                                    <div className="flex">
                                        <IconButton className="text-primary-DEFAULT hover:text-primary-dark" aria-label="Edit Quiz">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton className="text-primary-DEFAULT hover:text-primary-dark" aria-label="Delete Quiz">
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="w-full">
                                    <div className="flex mb-4 space-x-8">
                                        <div className="flex items-center">
                                            <AccessTimeIcon className="text-primary-DEFAULT mr-1" />
                                            <span className="text-neutral-textSecondary">{quiz.duration}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <CalendarTodayIcon className="text-primary-DEFAULT mr-1" />
                                            <span className="text-neutral-textSecondary">{quiz.date}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <StarIcon className="text-primary-DEFAULT mr-1" />
                                            <span className="text-neutral-textSecondary">{quiz.marks} Marks</span>
                                        </div>
                                    </div>

                                    <Typography variant="h6" className="mt-4">Student Submissions:</Typography>
                                    <div className="mt-2">
                                        {quiz.submissions.map((submission, idx) => (
                                            <div key={idx} className="flex justify-between border-b border-neutral-textSecondary py-2">
                                                <span className="text-neutral-textPrimary">{submission.studentName}</span>
                                                <span className="text-neutral-textPrimary">{submission.score} / {quiz.marks}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </div>
        </div>
    );
};

export default CourseQuizzes;
