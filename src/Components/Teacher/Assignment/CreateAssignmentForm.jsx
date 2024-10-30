import { useState } from 'react';

export default function CreateAssignmentForm() {
  const [assignment, setAssignment] = useState({
    name: '',
    due: '',
    description: '',
  });

  const handleChange = (e) => {
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Assignment Name</label>
        <input
          type="text"
          name="name"
          value={assignment.name}
          onChange={handleChange}
          className="mt-1 block w-full border px-4 py-2 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Due Date</label>
        <input
          type="date"
          name="due"
          value={assignment.due}
          onChange={handleChange}
          className="mt-1 block w-auto border px-4 py-2 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={assignment.description}
          onChange={handleChange}
          className="mt-1 block w-full border px-4 py-2 rounded-md"
          rows="4"
          required
        ></textarea>
      </div>
      <div>
      <input
          type="checkbox"
          className="border px-4 mr-2"
        />
        <label className="text-sm font-medium">Make Assignment visible to students</label>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
          Create Assignment
        </button>
      </div>
    </form>
  );
}