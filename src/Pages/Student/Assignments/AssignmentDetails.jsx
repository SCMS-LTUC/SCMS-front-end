// import { useParams } from 'react-router-dom';
import { Button } from "@mui/material"

const AssignmentDetails = () => {
//   const { courseName, assignmentId } = useParams();
  const assignment = {
    id: 1,
    courseName: 'Web Development',
    title: 'Assignment 1',
    description: 'Introduction to React',
    dueDate: '2024-05-01',
    status: 'Not Submitted',
    grade: 9,
    mark: 10,
    feedback: 'Great job!',
    submissionDate: '2024-04-30',
    files: [
      { id: 1, name: 'solution.pdf', url: '/files/solution.pdf' },
    ],
  }/* Fetch assignment details based on assignmentId */;
  
  if (!assignment) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4">
      <h1 className="mb-4">Assignment Details</h1>
      {assignment.status === "Submitted" ? (
        <div className="flex flex-col gap-4">
          {/* Assignment Details */}
          <div className="border shadow-md p-4">
            <h2 className="text-xl font-bold">{assignment.title}</h2>
            <p>{assignment.description}</p>
            <p> <i className="ri-calendar-line mr-1"></i>Due Date: {assignment.dueDate}</p>
          </div>
          
          {/* Submission Details */}
          <div className="border shadow-md p-4">
            <div className="alert alert-success text-green-500">
            <i className="ri-check-line mr-1"></i> Submission submitted successfully!
            </div>
            <p>Score: {assignment.grade} / {assignment.mark}</p>
            <p>Feedback: {assignment.feedback}</p>
          </div>
          
          {/* Submission Information */}
          <div className="border shadow-md p-4">
            <p>Submission Date: {assignment.submissionDate}</p>
            <p>Status: Submission</p>
            <div>
              <h3>Uploaded Files:</h3>
              <ul>
                {assignment.files.map(file => (
                  <li key={file.id}>
                    <a href={file.url} download className="text-blue-500">
                      {file.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Assignment Details */}
          <div className="border shadow-md p-4">
            <h2 className="text-xl font-bold">{assignment.title}</h2>
            <p>{assignment.description}</p>
            <p>Due Date: {assignment.dueDate}</p>
          </div>
          
          {/* Submission Form */}
          <div className="border shadow-md p-4">
            <h3 className="mb-2">Submit Assignment</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Response:</label>
                <textarea
                  className="w-full border rounded p-2"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Upload Files:</label>
                <input type="file" multiple />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit Assignment
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentDetails;