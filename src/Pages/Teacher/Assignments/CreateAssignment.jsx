import AssignmentLayout from "../../../Components/Teacher/Assignment/AssignmentLayout";
import CreateAssignmentForm from "../../../Components/Teacher/Assignment/CreateAssignmentForm";
import { useAssignments } from "../../../Logic/Teacher/useAssignment";
import { useNavigate, useParams } from "react-router-dom";

export default function EditAssignment() {
  const { courseId } = useParams();
  const { addAssignment } = useAssignments();
  const Navigate = useNavigate();

  const handleNewAssignment = (formData) => {
    console.log(formData);
    var assignment = {
      courseId: courseId,
      assignmentName: formData.name,
      description: formData.description,
      dueDate: formData.due,
      mark: formData.mark,
      visible: formData.visible,
    };
    console.log(assignment);
    addAssignment(assignment);
    Navigate(-1);
  }

  return (
    <div>
      <AssignmentLayout>
        <div className="space-y-6">
          <CreateAssignmentForm onSubmit={handleNewAssignment} />
        </div>
      </AssignmentLayout>
    </div>
  );
}
