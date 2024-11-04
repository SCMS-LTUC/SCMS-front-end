// import { useEffect, useState } from "react";

// // eslint-disable-next-line react/prop-types
// export default function GradeSubmissionForm({ submissionId }) {
//   const [submission, setSubmission] = useState(null);
//   const [grade, setGrade] = useState("");
//   const [feedback, setFeedback] = useState("");
//   const [assingment] = useState({
//     name: "Assignment 1",
//     due: "2023-10-01",
//     submissions: 10,
//     description: "Description for Assignment 1",
//     mark: 20,
//   });

//   useEffect(() => {
//     // Fetch submission details using submissionId
//     // Replace with actual API call
//     const fetchedSubmission = {
//       id: submissionId,
//       text: "Submitted assignment text...",
//       fileUrl: "/path/to/uploaded/file.pdf",
//       grade: "",
//       feedback: "",
//     };
//     setSubmission(fetchedSubmission);
//   }, [submissionId]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to save grade and feedback
//   };

//   if (!submission) {
//     return <p>Loading submission...</p>;
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium">Submission Text</label>
//         <div className="mt-1 p-2 border rounded-md">{submission.text}</div>
//       </div>
//       <div>
//         <label className="block text-sm font-medium">Attached File</label>
//         <div className="mt-3">
//           <a
//             href={submission.fileUrl}
//             download
//             className="border rounded-md shadow-sm text-black px-4 py-2"
//           >
//             Download File
//           </a>
//         </div>
//       </div>
//       <div>
//         <label className="block text-sm font-medium">Grade</label>
//         <input
//           type="number"
//           value={grade}
//           onChange={(e) => setGrade(e.target.value)}
//           className="mt-1 border px-4 py-2 rounded-md"
//           required
//         />
//         <span className="ml-3 text-base text-gray-500">
//           / {assingment.mark}
//         </span>
//       </div>
//       <div>
//         <label className="block text-sm font-medium">Feedback</label>
//         <textarea
//           value={feedback}
//           onChange={(e) => setFeedback(e.target.value)}
//           className="mt-1 block w-full border px-4 py-2 rounded-md"
//           rows="4"
//         ></textarea>
//       </div>
//       <div className="flex justify-end">
//         <button
//           type="submit"
//           className="bg-green-500 w-full text-white px-4 py-2 rounded-md"
//         >
//           Save Grade and Feedback
//         </button>
//       </div>
//     </form>
//   );
// }

import { useEffect, useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import PropTypes from "prop-types";

export default function GradeSubmissionForm({ submissionId }) {
  const [submission, setSubmission] = useState(null);
  const [grade, setGrade] = useState("");
  const [feedback, setFeedback] = useState("");
  const [assignment] = useState({
    name: "Assignment 1",
    due: "2023-10-01",
    submissions: 10,
    description: "Description for Assignment 1",
    mark: 20,
  });

  useEffect(() => {
    // Fetch submission details using submissionId
    // Replace with actual API call
    const fetchedSubmission = {
      id: submissionId,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
      culpa qui officia deserunt mollit anim id est laborum.`,
      fileUrl: "/path/to/uploaded/file.pdf",
      grade: "",
      feedback: "",
    };
    setSubmission(fetchedSubmission);
  }, [submissionId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save grade and feedback
  };

  if (!submission) {
    return <p>Loading submission...</p>;
  }

  return (
    <Paper className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <Typography className="text-primary !font-bold !text-3xl mb-4">
        Grade Submission
      </Typography>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Box className="mb-4">
          <Typography className="text-sm font-medium">
            Submission Text
          </Typography>
          <Box className="mt-1 p-2 border rounded-md max-h-60 overflow-y-auto">
            <Typography className="whitespace-pre-wrap">
              {submission.text}
            </Typography>
          </Box>
        </Box>
        <Box className="mb-4">
          <Typography className="text-sm font-medium">Attached File</Typography>
          <Box className="mt-3">
            <Button
              variant="outlined"
              color="primary"
              href={submission.fileUrl}
              download
              className="border rounded-md shadow-sm text-black px-4 py-2"
            >
              Download File
            </Button>
          </Box>
        </Box>
        <Box className="mb-4">
          <TextField
            label="Grade"
            name="grade"
            type="number"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            fullWidth
            variant="outlined"
            required
          />
          <Typography className="ml-3 text-base text-gray-500">
            / {assignment.mark}
          </Typography>
        </Box>
        <Box className="mb-4">
          <TextField
            label="Feedback"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
        </Box>
        <Box className="flex justify-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="bg-primary !text-white px-6 py-2 rounded-md"
          >
            Save
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

GradeSubmissionForm.propTypes = {
  submissionId: PropTypes.string.isRequired,
};
