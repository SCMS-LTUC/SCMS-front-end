import { useParams } from 'react-router-dom';
import GradeSubmissionForm from '../../../Components/Teacher/Assignment/GradeSubmissionForm';

export default function GradeSubmission() {
  const { submissionId } = useParams();

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-5"
        //   onClick={() => navigate(-1)}
        >
          Back to Submissions
        </button>
        <h1 className="text-xl font-bold">Grade Submission {submissionId}</h1>
      </div>
      <GradeSubmissionForm submissionId={submissionId} />
    </div>
  );
}