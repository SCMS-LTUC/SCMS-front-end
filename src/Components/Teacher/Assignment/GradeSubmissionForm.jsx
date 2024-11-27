import { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import {
  useAssignmentSubmission,
  useGradeSubmission,
} from "../../../Logic/Teacher/useAssignmentSubmissions";
import { useAssignment } from "../../../Logic/Teacher/useAssignment";
// import { v4 as uuidv4 } from "uuid";

export default function GradeSubmissionForm() {
  const { courseId, assignmentId, submissionId } = useParams();
  const Navigate = useNavigate();
  const { submission, error, loading } = useAssignmentSubmission(submissionId);
  console.log("submission", submission);
  const { gradesubmit } = useGradeSubmission(submissionId);
  const { assignment } = useAssignment(assignmentId);
  //const [submission, setSubmission] = useState(null);
  const [grade, setGrade] = useState(submission.grade);
  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };
  const [feedback, setFeedback] = useState(submission.feedback);
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };
  const [file, setFile] = useState(null);

  useEffect(() => {
    console.log(file);
    if (submission.filePath) {
      setFile(
        extractFileInfo(submission.filePath).fileNameWithoutGuid +
          "." +
          extractFileInfo(submission.filePath).fileExtension
      );
    } else {
      setFile(null);
    }
  }, [submission]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const extractFileInfo = (filePath) => {
    const fileNameWithGuid = filePath?.split("\\").pop(); // Extract full file name
    const fileExtension = fileNameWithGuid?.split(".").pop(); // Extract file extension

    // Remove the GUID portion from the filename by splitting at the underscore
    const fileNameWithoutGuid = fileNameWithGuid.split("_")[0];

    return { fileNameWithoutGuid, fileExtension };
  };
  const downloadFile = async (studentAssignmentId) => {
    try {
      // Replace with your actual backend URL and the student's assignment ID
      const response = await fetch(
        `http://localhost:5128/api/studentAssignments/download/${studentAssignmentId}/`,
        {
          method: "GET",
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("this is the file response", response);

      // Create a Blob from the response data
      const fileBlob = await response.blob();

      // Create an object URL for the Blob and trigger the download
      const downloadUrl = window.URL.createObjectURL(fileBlob);
      const link = document.createElement("a");
      link.href = downloadUrl;

      // Check if the content-disposition header is present
      const contentDisposition = response.headers.get("content-disposition");
      let fileName = file;
      if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(
          /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
        );
        if (fileNameMatch != null && fileNameMatch[1]) {
          fileName = fileNameMatch[1].replace(/['"]/g, "");
        }
      }
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  const handleDownloadFile = () => {
    downloadFile(submissionId);
  };
  // useEffect(() => {
  //   // Fetch submission details using submissionId
  //   // Replace with actual API call
  //   const fetchedSubmission = {
  //     id: submissionId,
  //     text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //     Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  //     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  //     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  //     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  //     culpa qui officia deserunt mollit anim id est laborum.`,
  //     fileUrl: "/path/to/uploaded/file.pdf",
  //     grade: "",
  //     feedback: "",
  //   };
  //   setSubmission(fetchedSubmission);
  // }, [submissionId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ submissionId, grade, feedback });
    gradesubmit({ studentAssignmentId: submissionId, grade, feedback });
    Navigate(
      `/course-details/${courseId}/assignments/${assignmentId}/submissions/`
    );
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
              {submission.submission}
            </Typography>
          </Box>
        </Box>
        <Box className="mb-4">
          <Typography className="text-sm font-medium">Attached File</Typography>
          <Box className="mt-3">
            <Button
              variant="outlined"
              color="primary"
              href={submission.filepath}
              download
              className="border rounded-md shadow-sm text-black"
              onClick={handleDownloadFile}
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
            onChange={handleGradeChange}
            fullWidth
            variant="outlined"
            required
          />
          <Typography className="ml-3 text-base text-gray-500">
            / {assignment.fullMark}
          </Typography>
        </Box>
        <Box className="mb-4">
          <TextField
            label="Feedback"
            name="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
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
            className="bg-primary !text-white rounded-md"
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
