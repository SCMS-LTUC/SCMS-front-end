// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// export default function AssignmentSubmissions() {
//   const { assignmentId } = useParams();
//   const Navigate = useNavigate();

//   const [assingment] = useState({
//     name: "Assignment 1",
//     due: "2023-10-01",
//     submissions: 10,
//     description: "Description for Assignment 1",
//     mark: 10,
//   });
//   const [submissions, setSubmissions] = useState([]);

//   useEffect(() => {
//     // Fetch submissions for the assignment using assignmentId
//     // Replace with actual API call
//     const fetchedSubmissions = [
//       {
//         id: 1,
//         status: true,
//         studentName: "Alice Johnson",
//         submittedAt: "2023-10-01",
//         grade: 9,
//       },
//       {
//         id: 2,
//         status: false,
//         studentName: "Bob Smith",
//         submittedAt: "2023-10-02",
//         grade: 8,
//       },
//       // Add more submissions as needed
//     ];
//     setSubmissions(fetchedSubmissions);
//   }, [assignmentId]);

//   return (
//     <div className="p-4">
//       <div className="flex items-center mb-4">
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-md mr-5"
//           onClick={() => Navigate("/course-details/:courseName/assignments")}
//         >
//           Back to Assignments
//         </button>
//         <h1 className="text-xl font-bold">
//           Submissions for Assignment {assignmentId}
//         </h1>
//       </div>
//       <table className="w-full text-left border-collapse table-auto">
//         <thead>
//           <tr>
//             <th className="border p-2">Student Name</th>
//             <th className="border p-2">Status</th>
//             <th className="border p-2">Submitted Date</th>
//             <th className="border p-2">Grade</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-gray-100">
//           {submissions.map((submission) => (
//             <tr key={submission.id}>
//               <td className="border p-2">{submission.studentName}</td>
//               <td className="border p-2">
//                 {submission.status ? "Submitted" : "Not Submitted"}
//               </td>
//               <td className="border p-2">
//                 {submission.status ? submission.submittedAt : ""}
//               </td>
//               <td className="border p-2">
//                 {submission.status
//                   ? `${submission.grade} \\ ${assingment.mark}`
//                   : ""}
//               </td>
//               <td className="border p-2">
//                 <button
//                   onClick={() =>
//                     Navigate(
//                       "/course-details/:courseName/assignments/:assignmentId/submissions/:submissionId/grade"
//                     )
//                   }
//                   className="bg-white text-black px-4 py-2 border rounded-md shadow-sm"
//                 >
//                   view and grade
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import AssignmentLayout from "../../../Components/Teacher/Assignment/AssignmentLayout";
import SubmissionsTable from "../../../Components/Teacher/Assignment/SubmissionsTable";

const rows = [
  {
    studentID: 1,
    fullName: "Alice Johnson",
    studentAssignment: {
      studentAssignmentId: 101,
      submissionDate: "2024-11-03T22:15:00Z",
      grade: 85,
      feedback: "Well done!",
    },
  },
  {
    studentID: 2,
    fullName: "Bob Smith",
    studentAssignment: {
      studentAssignmentId: 102,
      submissionDate: "2024-11-04T14:23:26Z",
      grade: 90,
      feedback: "Excellent work!",
    },
  },
  {
    studentID: 3,
    fullName: "Cathy Brown",
    studentAssignment: null, // No submission
  },
  {
    studentID: 4,
    fullName: "David Wilson",
    studentAssignment: {
      studentAssignmentId: 103,
      submissionDate: "2024-10-31T09:00:00Z",
      grade: 70,
      feedback: "Needs improvement.",
    },
  },
  {
    studentID: 5,
    fullName: "Eva Lee",
    studentAssignment: null, // No submission
  },
];

export default function EditAssignment() {
  return (
    <div>
      <AssignmentLayout>
        <div className="space-y-6 ">
          <SubmissionsTable rows={rows} />
        </div>
      </AssignmentLayout>
    </div>
  );
}