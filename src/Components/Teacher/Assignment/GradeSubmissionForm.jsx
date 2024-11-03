import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function GradeSubmissionForm({ submissionId }) {
  const [submission, setSubmission] = useState(null);
  const [grade, setGrade] = useState('');
  const [feedback, setFeedback] = useState('');
  const [assingment] = useState({name: 'Assignment 1',
    due: '2023-10-01',
    submissions: 10,
    description: 'Description for Assignment 1',
    mark: 20});

  useEffect(() => {
    // Fetch submission details using submissionId
    // Replace with actual API call
    const fetchedSubmission = {
      id: submissionId,
      text: 'Submitted assignment text...',
      fileUrl: '/path/to/uploaded/file.pdf',
      grade: '',
      feedback: '',
    };
    setSubmission(fetchedSubmission);
  }, [submissionId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save grade and feedback
  };

  if (!submission) {
    return <p>Loading submission...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Submission Text</label>
        <div className="mt-1 p-2 border rounded-md">
          {submission.text}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Attached File</label>
        <div className="mt-3">
          <a
            href={submission.fileUrl}
            download
            className="border rounded-md shadow-sm text-black px-4 py-2"
          >
            Download File
          </a>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Grade</label>
        <input
          type="number"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="mt-1 border px-4 py-2 rounded-md"
          required
        />
        <span className="ml-3 text-md text-gray-500">/ {assingment.mark}</span>
      </div>
      <div>
        <label className="block text-sm font-medium">Feedback</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="mt-1 block w-full border px-4 py-2 rounded-md"
          rows="4"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-500 w-full text-white px-4 py-2 rounded-md"
        >
          Save Grade and Feedback
        </button>
      </div>
    </form>
  );
}