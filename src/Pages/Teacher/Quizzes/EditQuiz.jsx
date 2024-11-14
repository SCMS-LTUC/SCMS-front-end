import QuizLayout from "../../../Components/Teacher/Quiz/QuizLayout";
import EditQuizForm from "../../../Components/Teacher/Quiz/EditQuizForm";
export default function EditAssignment() {
  return (
    <div>
      <QuizLayout>
        <div className="space-y-6">
          <EditQuizForm />
        </div>
      </QuizLayout>
    </div>
  );
}
