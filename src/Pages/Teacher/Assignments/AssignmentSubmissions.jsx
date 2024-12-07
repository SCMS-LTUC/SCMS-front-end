import AssignmentLayout from "../../../Components/Teacher/Assignment/AssignmentLayout";
import SubmissionsTable from "../../../Components/Teacher/Assignment/SubmissionsTable";
import { useAssignmentSubmissions } from "../../../Logic/Teacher/useAssignmentSubmissions";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AssignmentSubmissions() {
  const { assignmentId } = useParams();
  const [key, setKey] = useState(0);
  console.log(key);

  const { submissions, error, loading } =
    useAssignmentSubmissions(assignmentId);
  useEffect(() => {
    // Force re-render when submissions change
    setKey((prevKey) => prevKey + 1);
  }, [submissions]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(submissions);
  console.log(assignmentId);

  return (
    <div>
      <AssignmentLayout>
        <div className="space-y-6 ">
          <SubmissionsTable rows={submissions} />
        </div>
      </AssignmentLayout>
    </div>
  );
}
