export const announcements = [
  {
    title: "Announcement 1",
    createdAt: "2024-11-10T21:09:02.814Z",
    type: "Important",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Announcement 2",
    createdAt: "2024-11-10T21:09:02.814Z",
    type: "Notice",
    content: "Description for Announcement 2",
  },
  {
    title: "Announcement 3",
    createdAt: "2024-11-10T21:09:02.814Z",
    type: "Info",
    content: "Description for Announcement 2",
  },
];
export const scheduleCourses = {
  $id: "1",
  $values: [
    {
      $id: "2",
      teacherName: "John Doe",
      subjectName: "Data Structures",
      startDate: "2024-09-05T00:00:00",
      endDate: "2024-12-15T00:00:00",
      startTime: "10:00:00",
      endTime: "12:00:00",
      days: {
        $id: "3",
        $values: ["Tuesday", "Thursday"],
      },
      className: "Data Structures",
      capacity: 150,
      classroomNumber: "2B",
    },
    {
      $id: "4",
      teacherName: "Jane Smith",
      subjectName: "Mathematics",
      startDate: "2024-09-10T00:00:00",
      endDate: "2024-12-20T00:00:00",
      startTime: "14:00:00",
      endTime: "16:00:00",
      days: {
        $id: "5",
        $values: ["Monday", "Friday"],
      },
      className: "Mathematics",
      capacity: 100,
      classroomNumber: "3C",
    },
    {
      $id: "6",
      teacherName: "Alice Brown",
      subjectName: "Physics",
      startDate: "2024-09-15T00:00:00",
      endDate: "2024-12-25T00:00:00",
      startTime: "09:00:00",
      endTime: "11:30:00",
      days: {
        $id: "7",
        $values: ["Wednesday", "Saturday"],
      },
      className: "Physics",
      capacity: 120,
      classroomNumber: "4D",
    },
  ],
};
