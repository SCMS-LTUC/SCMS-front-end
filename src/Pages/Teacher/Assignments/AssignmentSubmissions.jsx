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

export default function AssignmentSubmissions() {
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
