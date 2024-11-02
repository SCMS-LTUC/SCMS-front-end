import { useState } from 'react';
import { useParams } from 'react-router-dom';
import AssignmentItem from "../../../Components/Student/Assignments/AssignmentItem";

const ListAssignments = () => {
  const { courseName } = useParams();
  const [assignments] = useState([
    {
      id: 1,
      courseName: 'Web Development',
      title: 'Assignment 1',
      description: 'Introduction to React',
      dueDate: '2024-05-01',
      status: 'Submitted',
      grade: 9,
      mark: 10,
      feedback: 'Great job!',
      submissionDate: '2024-04-30',
      files: [
        { id: 1, name: 'solution.pdf', url: '/files/solution.pdf' },
      ],
    },
    {
      id: 2,
      courseName: 'Web Development',
      title: 'Assignment 2',
      description: 'State Management with Redux',
      dueDate: '2024-05-15',
      status: 'Not Submitted',
      grade: 0,
      mark: 10,
      files: [],
    },
    {
      id: 3,
      courseName: 'Web Development',
      title: 'Assignment 3',
      description: 'Routing with React Router',
      dueDate: '2024-06-01',
      status: 'Not Submitted',
      grade: 0,
      mark: 10,
      files: [],
    },
  ]);

  return (
    <div className='m-4'>
      <h1 className='mb-4'>Assignments for {courseName}</h1>
      <ul>
        {assignments.map(assignment => (
          <AssignmentItem key={assignment.id} assignment={assignment} />
        ))}
      </ul>
    </div>
  );
};

export default ListAssignments;