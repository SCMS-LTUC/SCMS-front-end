import AssignmentLayout from "../../../Components/Student/Assignments/AssignmentLayout";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { assignment } from "../../../Logic/Student/Data";
// if student try to submit twice this would give this error message:Submission already exists. You cannot submit more than once.
// consider view a suitable error message in the notification snap bar for this case.

export default function SubmitAssignment() {
  const [submissionText, setSubmissionText] = useState("");
  const [file, setFile] = useState(null);
  const { assignmentId } = useParams();
  console.log(assignmentId);
  console.log(file);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = () => {
    // implement the submit functionality here
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
