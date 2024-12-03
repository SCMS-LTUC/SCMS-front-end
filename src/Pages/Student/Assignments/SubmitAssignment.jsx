import AssignmentLayout from "../../../Components/Student/Assignments/AssignmentLayout";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
//import { assignment } from "../../../Logic/Student/Data";
import {
  useAssignment,
  useSubmitAssignment,
} from "../../../Logic/Student/useAssignments";

export default function SubmitAssignment() {
  const navigate = useNavigate();
  const [submissionText, setSubmissionText] = useState("");
  const [file, setFile] = useState(null);
  const { courseId, assignmentId } = useParams();
  const { assignment } = useAssignment(assignmentId);
  const { submit } = useSubmitAssignment();
  console.log(assignmentId);
  console.log(file);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = () => {
    submit(assignmentId, submissionText, file);
    navigate(`/course-details/${courseId}/assignments`);
  };

  return (
    <div>
      <AssignmentLayout
        dueDate={assignment.dueDate}
        title={assignment.assignmentName}
      >
        <div className="space-y-6">
          {/* Assignment Details card */}
          <div>
            <Card className="container !bg-neutral-surface !rounded-lg !border-2 !border-neutral-border !p-4  ">
              <CardContent className="!h-full space-y-4  !pb-4">
                <h1 className="text-xl font-semibold !mb-5">
                  Assignment Details
                </h1>
                <p>{assignment.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* Submit your work */}
          <div>
            <Card className="container !bg-neutral-surface !rounded-lg  !border-2 !border-neutral-border !p-4  ">
              <CardContent className="!h-full space-y-4  !pb-4">
                <h1 className="text-xl font-semibold !mb-5">
                  Submit Your Work
                </h1>
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <TextField
                        label="Submission Text"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={submissionText}
                        onChange={(e) => setSubmissionText(e.target.value)}
                        required
                        className="shadow-md"
                        sx={{
                          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                            {
                              borderColor: "primary.main",
                            },
                        }}
                      />
                    </div>
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="outlined"
                        component="label"
                        startIcon={<UploadFileIcon />}
                        className="shadow-md"
                        sx={{
                          color: "#E65D2E",
                          borderColor: "#E65D2E",
                        }}
                      >
                        Upload File
                        <input type="file" hidden onChange={handleFileChange} />
                      </Button>
                      {file && (
                        <Typography className="text-sm text-gray-600">
                          {file.name}
                        </Typography>
                      )}
                    </div>
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className=" !text-white"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AssignmentLayout>
    </div>
  );
}
