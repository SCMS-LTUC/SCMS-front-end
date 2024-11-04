// import CreateAssignmentForm from "../../../Components/Teacher/Assignment/CreateAssignmentForm";
// import { useNavigate } from "react-router-dom";
// export default function CreateAssignment() {
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
//         <h1 className="text-xl font-bold">Create New Assignment</h1>
//       </div>
//       <div className="p-4">
//         <CreateAssignmentForm />
//       </div>
//     </>
//   );
// }

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

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { CircularProgress, Box } from "@mui/material";
// import CreateAssignmentForm from "../../../Components/Teacher/Assignment/CreateAssignmentForm";

import AssignmentLayout from "../../../Components/Teacher/Assignment/AssignmentLayout";
import CreateAssignmentForm from "../../../Components/Teacher/Assignment/CreateAssignmentForm";
export default function EditAssignment() {
  return (
    <div>
      <AssignmentLayout>
        <div className="space-y-6">
          <CreateAssignmentForm />
        </div>
      </AssignmentLayout>
    </div>
  );
}
