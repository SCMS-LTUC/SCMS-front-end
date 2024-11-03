// import EditAssignmentForm from "../../../Components/Teacher/Assignment/EditAssignmentForm";
// import { useNavigate } from "react-router-dom";

// export default function EditAssignment() {
//   const Navigate = useNavigate();

//   return (
//     <>
//       <div className="flex items-center p-4">
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-md mr-5"
//           onClick={() => Navigate("/course-details/:courseName/assignments")}
//         >
//           Back to Assignments
//         </button>
//         <h1 className="text-xl font-bold">Edit Assignment</h1>
//       </div>
//       <div className="p-4">
//         <EditAssignmentForm />
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import EditAssignmentForm from "../../../Components/Teacher/Assignment/EditAssignmentForm";
import AssignmentLayout from "../../../Components/Teacher/Assignment/AssignmentLayout";
export default function EditAssignment() {
  const { assignmentId } = useParams();
  // const navigate = useNavigate();
  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
    setAssignment({
      name: "Assignment 1",
      due: "2023-10-01",
      submissions: 10,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      mark: 10,
      visible: false,
    });
  }, [assignmentId]);

  if (!assignment) {
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
          {/* <h1 className="font-bold  text-2xl text-neutral-textPrimary">
            Edit Assignment
          </h1> */}
          <EditAssignmentForm assignment={assignment} />
        </div>
      </AssignmentLayout>
    </div>
  );
}
