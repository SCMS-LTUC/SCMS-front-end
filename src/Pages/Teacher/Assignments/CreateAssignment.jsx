import CreateAssignmentForm from '../../../Components/Teacher/Assignment/CreateAssignmentForm';

export default function CreateAssignment() {

  return (
    <>
      <div className="flex items-center p-4">
      <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-5"
        >
          Back to Assignments
        </button>
        <h1 className="text-xl font-bold">Create New Assignment</h1>
        
      </div>
      <div className="p-4">
        <CreateAssignmentForm />
      </div>
    </>
  );
}