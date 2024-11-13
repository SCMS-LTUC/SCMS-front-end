import { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import "tailwindcss/tailwind.css";

const quizData = [
  {
    id: 101,
    questionText: "What is JSX?",
    options: [
      "A JavaScript library",
      "A syntax extension for JavaScript",
      "A CSS framework",
      "None of the above",
    ],
    correctOption: 1,
  },
  {
    id: 102,
    questionText: "What is JSX?",
    options: [
      "A JavaScript library",
      "A syntax extension for JavaScript",
      "A CSS framework",
      "None of the above",
    ],
    correctOption: 1,
  },
];

const TakeQuiz = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (questionId, optionIndex) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: optionIndex,
    });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <Container className="mt-10">
      {quizData.map((question) => (
        <Card key={question.id} className="mb-6">
          <CardContent>
            <Typography variant="h6" className="mb-4">
              {question.questionText}
            </Typography>
            <RadioGroup
              value={selectedOptions[question.id] || ""}
              onChange={(e) =>
                handleOptionChange(question.id, parseInt(e.target.value))
              }
            >
              {question.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={index}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      ))}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      {showResults && (
        <div className="mt-6">
          {quizData.map((question) => (
            <Typography key={question.id} variant="body1">
              Question {question.id}:{" "}
              {selectedOptions[question.id] === question.correctOption
                ? "Correct"
                : "Incorrect"}
            </Typography>
          ))}
        </div>
      )}
    </Container>
  );
};

export default TakeQuiz;
