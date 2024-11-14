import QuizLayout from "../../../Components/Teacher/Quiz/QuizLayout";
import CreateQuizForm from "../../../Components/Teacher/Quiz/CreateQuizForm";
export default function EditAssignment() {
  return (
    <div>
      <QuizLayout>
        <div className="space-y-6">
          <CreateQuizForm />
        </div>
      </QuizLayout>
    </div>
  );
}
