import QuizLayout from "../../../Components/Teacher/Quiz/QuizLayout";
import SubmissionTable from "../../../Components/Teacher/Quiz/SubmissionsTable";

export default function AssignmentSubmissions() {
  return (
    <div>
      <QuizLayout>
        <div className="space-y-6 ">
          <SubmissionTable />
        </div>
      </QuizLayout>
    </div>
  );
}
