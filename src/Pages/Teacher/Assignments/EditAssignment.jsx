import { CircularProgress, Box } from "@mui/material";
import EditAssignmentForm from "../../../Components/Teacher/Assignment/EditAssignmentForm";
import AssignmentLayout from "../../../Components/Teacher/Assignment/AssignmentLayout";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditAssignment() {
  const { courseId } = useParams();
  // const { assignmentId } = useParams();
  // const navigate = useNavigate();
  // const [assignment, setAssignment] = useState(null);

  // useEffect(() => {
  //   setAssignment({
  //     name: "Assignment 1",
  //     due: "2023-10-01",
  //     submissions: 10,
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     mark: 10,
  //     visible: false,
  //   });
  // }, [assignmentId]);
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve quiz data from navigation state
  const [assignment, setAssignment] = useState({
    id: "",
    title: "",
    status: true,
    startDate: "",
    endDate: "",
    duration: "",
    totalMarks: "",
    questions: [],
  });

  useEffect(() => {
    const existingAssignment = location.state?.assignment;
    console.log(existingAssignment);
    if (existingAssignment) {
      setAssignment(existingAssignment);
    } else {
      // If no state is passed, navigate back to quizzes
      navigate(`/course-details/${courseId}/assignments`);
    }
  }, [location.state, navigate]);

  if (!assignment) {
    console.log(assignment);
    return (
      <Box className="flex justify-center items-center h-full">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <div>
      <AssignmentLayout>
        <div className="space-y-6">
          <EditAssignmentForm assignment={assignment} />
        </div>
      </AssignmentLayout>
    </div>
  );
}
// EditAssignment.propTypes = {
//   assignment: PropTypes.object.isRequired,
// };
