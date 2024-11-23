import AssignmentLayout from "../../../Components/Student/Assignments/AssignmentLayout";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
// the assignments is the data from api/assignments/courses/{courseId}/student/assignments
import { assignment, studentAssignment } from "../../../Logic/Student/Data";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";

const formatDate = (dateString) => {
  if (!dateString) return { date: "N/A", time: "N/A" };

  const date = new Date(dateString);
  const toDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const toTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return { date: toDate, time: toTime };
};
// TODO: pls test the download file, I didn't test it
const downloadFile = async (studentAssignmentId) => {
  try {
    // Replace with your actual backend URL and the student's assignment ID
    // const response = await axios.get(
    //   `http://localhost:5000/api/studentAssignments/downloadFile/${studentAssignmentId}`,
    //   {
    //     responseType: "blob", // Ensure the response is treated as a file (binary data)
    //   }
    // );
    console.log(studentAssignmentId);
    const response = {};
    // Create a Blob from the response data
    const fileBlob = new Blob([response.data]);

    // Create an object URL for the Blob and trigger the download
    const downloadUrl = window.URL.createObjectURL(fileBlob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute(
      "download",
      response.headers["content-disposition"].split("filename=")[1] || "file"
    ); // Use file name from the response or fallback to 'file'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};
const extractFileInfo = (filePath) => {
  const fileNameWithGuid = filePath.split("\\").pop(); // Extract full file name
  const fileExtension = fileNameWithGuid.split(".").pop(); // Extract file extension

  // Remove the GUID portion from the filename by splitting at the underscore
  const fileNameWithoutGuid = fileNameWithGuid.split("_")[0];

  return { fileNameWithoutGuid, fileExtension };
};

export default function ViewSubmission() {
  const { assignmentId, studentAssignmentId } = useParams();
  console.log(assignmentId);
  console.log(studentAssignmentId);

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

          {/* Submission Details */}
          <div>
            <Card className="container !bg-neutral-surface !rounded-lg  !border-2 !border-neutral-border !p-4  ">
              <CardContent className="!h-full space-y-4  !pb-4">
                <h1 className="text-xl font-semibold !mb-5">
                  Submission Details
                </h1>
                <div className="!text-accent-success flex items-center space-x-2">
                  <TaskAltIcon />
                  <h1 className="text-lg">Submitted successfully</h1>
                </div>
                <div className="space-y-2 text-lg">
                  <h1 className="font-semibold">Score:</h1>
                  <h1>
                    {studentAssignment.grade
                      ? `${studentAssignment.grade}/${assignment.fullMark}`
                      : "-"}
                  </h1>
                </div>
                <div className="space-y-2 text-lg">
                  <h1 className="font-semibold">Feedback:</h1>
                  <h1>{studentAssignment.feedback}</h1>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Your Submission */}
          <div>
            <Card className="container !bg-neutral-surface !rounded-lg  !border-2 !border-neutral-border !p-4  ">
              <CardContent className="!h-full space-y-4  !pb-4">
                <div className="flex items-center space-x-2 !mb-5">
                  <FeedOutlinedIcon />
                  <h1 className="text-xl font-semibold ">Your Submission</h1>
                </div>
                <h1 className="text-neutral-textSecondary">
                  Submitted on:{" "}
                  {`${formatDate(studentAssignment.submissionDate).date}, ${formatDate(studentAssignment.submissionDate).time}`}
                </h1>
                <div className="space-y-2 text-lg">
                  <h1 className="font-semibold">Written Response:</h1>
                  <p className="bg-neutral-background p-4 rounded-md">
                    {studentAssignment.submission}
                  </p>
                </div>
                <div className="space-y-2 text-lg">
                  <h1 className="font-semibold">Submitted Files:</h1>
                  <p className="bg-neutral-background p-4 rounded-md flex items-center space-x-2">
                    <FeedOutlinedIcon />
                    <div
                      className="hover:!text-accent-info transition-all hover:!underline hover:cursor-pointer"
                      onClick={() => downloadFile(studentAssignmentId)}
                    >
                      {
                        extractFileInfo(studentAssignment.filePath)
                          .fileNameWithoutGuid
                      }
                      .
                      {
                        extractFileInfo(studentAssignment.filePath)
                          .fileExtension
                      }
                    </div>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AssignmentLayout>
    </div>
  );
}