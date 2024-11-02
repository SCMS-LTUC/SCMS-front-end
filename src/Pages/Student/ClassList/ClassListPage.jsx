import { useState, useMemo } from 'react';
import StudentCard from '../../../Components/Common/StudentCard';
import { TextField, Pagination } from '@mui/material';

const mockStudents = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar: '/avatars/john.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      avatar: '/avatars/jane.jpg',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      avatar: '/avatars/alice.jpg',
    },
    {
      id: 4,
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      avatar: '/avatars/michael.jpg',
    },
    {
      id: 5,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      avatar: '/avatars/emily.jpg',
    },
    {
      id: 6,
      name: 'Daniel Wilson',
      email: 'daniel.wilson@example.com',
      avatar: '/avatars/daniel.jpg',
    },
    {
      id: 7,
      name: 'Sophia Martinez',
      email: 'sophia.martinez@example.com',
      avatar: '/avatars/sophia.jpg',
    },
    {
      id: 8,
      name: 'James Anderson',
      email: 'james.anderson@example.com',
      avatar: '/avatars/james.jpg',
    },
    {
      id: 9,
      name: 'Olivia Thomas',
      email: 'olivia.thomas@example.com',
      avatar: '/avatars/olivia.jpg',
    },
    {
      id: 10,
      name: 'Benjamin Taylor',
      email: 'benjamin.taylor@example.com',
      avatar: '/avatars/benjamin.jpg',
    },
    {
      id: 11,
      name: 'Isabella Moore',
      email: 'isabella.moore@example.com',
      avatar: '/avatars/isabella.jpg',
    },
    {
      id: 12,
      name: 'Ethan Jackson',
      email: 'ethan.jackson@example.com',
      avatar: '/avatars/ethan.jpg',
    },
    {
      id: 13,
      name: 'Mia Martin',
      email: 'mia.martin@example.com',
      avatar: '/avatars/mia.jpg',
    },
    {
      id: 14,
      name: 'Alexander Lee',
      email: 'alexander.lee@example.com',
      avatar: '/avatars/alexander.jpg',
    },
    {
      id: 15,
      name: 'Charlotte Perez',
      email: 'charlotte.perez@example.com',
      avatar: '/avatars/charlotte.jpg',
    },
    {
      id: 16,
      name: 'William Thompson',
      email: 'william.thompson@example.com',
      avatar: '/avatars/william.jpg',
    },
    {
      id: 17,
      name: 'Amelia White',
      email: 'amelia.white@example.com',
      avatar: '/avatars/amelia.jpg',
    },
    {
      id: 18,
      name: 'Lucas Harris',
      email: 'lucas.harris@example.com',
      avatar: '/avatars/lucas.jpg',
    },
    {
      id: 19,
      name: 'Harper Lewis',
      email: 'harper.lewis@example.com',
      avatar: '/avatars/harper.jpg',
    },
    {
      id: 20,
      name: 'Henry Clark',
      email: 'henry.clark@example.com',
      avatar: '/avatars/henry.jpg',
    },
  ];

const ClassListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  const filteredStudents = useMemo(() => {
    return mockStudents.filter(
      (student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const displayedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * studentsPerPage;
    return filteredStudents.slice(startIndex, startIndex + studentsPerPage);
  }, [filteredStudents, currentPage]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Class List</h1>
      <div className="mb-4">
          <TextField
            label="Search Students"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4"
          />
      </div>
      {displayedStudents.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(e, page) => setCurrentPage(page)}
        color="primary"
        className="mt-4"
      />
    </div>
  );
};

export default ClassListPage;