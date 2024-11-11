import AssignmentLayout from "../../../Components/Teacher/Assignment/AssignmentLayout";
import CreateAssignmentForm from "../../../Components/Teacher/Assignment/CreateAssignmentForm";
export default function EditAssignment() {
  return (
    <div>
      <AssignmentLayout>
        <div className="space-y-6">
          <CreateAssignmentForm />
        </div>
      </AssignmentLayout>
    </div>
  );
}
