// // src/Pages/Student/Quizes/ViewResults.jsx

// import { useParams, useNavigate } from 'react-router-dom';
// import {
//   Typography,
//   Button,
//   Box,
//   Paper,
// } from '@mui/material';
// import { useState, useEffect } from 'react';

// // Mock Results Data (Replace with actual data fetching logic)
// const mockResults = {
//   1: {
//     score: 85,
//     total: 100,
//     feedback: 'Great understanding of React basics!',
//   },
//   3: {
//     score: 180,
//     total: 200,
//     feedback: 'Excellent grasp of UI/UX principles.',
//   },
//   // Add more results as needed
// };

// const ViewResults = () => {
//   const { quizId } = useParams();
//   const navigate = useNavigate();
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     // Fetch the result based on quizId
//     // Replace this with actual data fetching (e.g., API call)
//     const fetchedResult = mockResults[quizId];
//     if (fetchedResult) {
//       setResult(fetchedResult);
//     } else {
//       setResult(null);
//     }
//   }, [quizId]);

//   return (
//     <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', p: 5 }}>
//       <Typography variant="h4" gutterBottom>
//         Quiz Results
//       </Typography>

//       {result ? (
//         <Paper sx={{ p: 4 }}>
//           <Typography variant="h6">Score: {result.score} / {result.total}</Typography>
//           <Typography variant="body1" sx={{ mt: 2 }}>
//             Feedback: {result.feedback}
//           </Typography>
//         </Paper>
//       ) : (
//         <Typography>No results available for this quiz.</Typography>
//       )}

//       <Button variant="contained" onClick={() => navigate('/student/quizzes')} sx={{ mt: 4 }}>
//         Back to Quizzes
//       </Button>
//     </Box>
//   );
// };

// export default ViewResults;

import { useParams } from "react-router-dom";
import { Typography, Divider, Chip } from "@mui/material";
import QuizLayout from "../../../Components/Student/Quiz/QuizLayout";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import QuizResultCard from "../../../Components/Student/Quiz/QuizResultCard";
// the quiz is the data from api/Quiz/{quizId}
// the quizResult is the data from api/Quiz/get-saved-score
import { quizResult, quiz } from "../../../Logic/Student/Data";

const QuizInstructions = () => {
  const { quizId } = useParams();
  console.log(quizId);

  if (!quizResult) return null;

  return (
    <QuizLayout>
      <div>
        <div className="container space-y-4 !mx-auto">
          <div className=" justify-between">
            <Typography className="!font-bold !text-2xl !text-neutral-textPrimary !pb-1">
              {quiz.title}
            </Typography>
            <div className="space-x-2">
              <Chip
                icon={
                  <AccessAlarmIcon className=" !text-neutral-textSecondary" />
                }
                label={"Duration: " + quiz.duration + " minutes"}
                className="!bg-white !text-base !text-neutral-textSecondary"
              />
              <Chip
                icon={
                  <HelpOutlineOutlinedIcon className=" !text-neutral-textSecondary" />
                }
                label={quiz.questions.$values.length + " questions"}
                className="!bg-white !text-base !text-neutral-textSecondary"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-start space-y-6">
              <QuizResultCard quizResult={quizResult} />
            </div>
          </div>
          <Divider className="!my-4" />
        </div>
      </div>
    </QuizLayout>
  );
};

export default QuizInstructions;
