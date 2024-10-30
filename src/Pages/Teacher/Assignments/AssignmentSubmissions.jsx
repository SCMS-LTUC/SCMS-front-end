import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function AssignmentSubmissions() {
  const { assignmentId } = useParams();
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch submissions for the assignment using assignmentId
    // Replace with actual API call
    const fetchedSubmissions = [
      { id: 1,status: true , studentName: 'Alice Johnson', submittedAt: '2023-10-01', grade: 90 },
      { id: 2,status: false , studentName: 'Bob Smith', submittedAt: '2023-10-02', grade: 85 },
      // Add more submissions as needed
    ];
    setSubmissions(fetchedSubmissions);
  }, [assignmentId]);

  return (
    <div className="p-4">
        <div className="flex items-center mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-5"
            >
              Back to Assignments
            </button>
            <h1 className="text-xl font-bold">Submissions for Assignment {assignmentId}</h1>
        </div>
      <table className="w-full text-left border-collapse table-auto">
        <thead>
          <tr>
            <th className="border p-2">Student Name</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Submitted Date</th>
            <th className="border p-2">Grade</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td className="border p-2">{submission.studentName}</td>
              <td className="border p-2">{submission.status ? "Submitted" : "Not Submitted"}</td>
              <td className="border p-2">{submission.status ? submission.submittedAt : ""}</td>
              <td className="border p-2">{submission.status ? submission.grade : ""}</td>
              <td className="border p-2"><button className="bg-white text-black px-4 py-2 border rounded-md shadow-sm">view and grade</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}