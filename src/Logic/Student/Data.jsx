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
export const currentCourses = [
  {
    courseId: "1",
    courseName: "Introduction to Web Development",
    teacher: "Dr. Ahmad Samhan",
    progress: 50,
    classroom: "Room 101",
    startTime: "9:00",
    endTime: "10:00",
    days: ["Sun", "Tue"],
    startDate: "2024-10-05T10:00:00.000Z",
    endDate: "2024-12-05T10:00:00.000Z",
  },
  {
    courseId: "2",
    courseName: "Advanced React",
    teacher: "Dr. Omar Zain",
    progress: 85,
    classroom: "Room 202",
    startTime: "8:00",
    endTime: "9:00",
    days: ["Mon", "Wed"],
    startDate: "2024-11-01T08:30:00.000Z",
    endDate: "2024-12-15T08:30:00.000Z",
  },
];
export const completedCourses = [
  {
    courseId: "1",
    courseName: "Web Development Fundamentals",
    teacher: "Mr. John Doe",
    startDate: "2024-11-01T08:30:00.000Z",
    endDate: "2024-12-15T08:30:00.000Z",
    numberOfHours: "40",
    certificateId: "987654",
    averagedGrade: 90,
    description: "An introductory course covering HTML, CSS, and JavaScript.",
  },
  {
    courseId: "2",
    courseName: "Data Structures and Algorithms",
    teacher: "Prof. Alice Chen",
    startDate: "2024-10-05T10:00:00.000Z",
    endDate: "2024-12-05T10:00:00.000Z",
    numberOfHours: "50",
    certificateId: "345678",
    averagedGrade: 88,
    description:
      "Learn the fundamentals of data structures and algorithmic problem-solving.",
  },
  {
    courseId: "3",
    courseName: "Database Management Systems",
    teacher: "Dr. Layla Karim",
    startDate: "2024-11-17T03:51:11.031Z",
    endDate: "2024-12-17T03:51:11.031Z",
    numberOfHours: "30",
    certificateId: "123456",
    averagedGrade: 85,
    description:
      "Learn the fundamentals of data structures and algorithmic problem-solving.",
  },
  {
    courseId: "4",
    courseName: "Machine Learning Basics",
    teacher: "Dr. Samuel Lee",
    startDate: "2024-09-20T14:00:00.000Z",
    endDate: "2024-11-20T14:00:00.000Z",
    numberOfHours: "45",
    certificateId: "112233",
    averagedGrade: 92,
    description:
      "An introduction to the core concepts of machine learning and its applications.",
  },
  {
    courseId: "5",
    courseName: "Software Engineering Principles",
    teacher: "Ms. Maria Torres",
    startDate: "2024-10-15T09:00:00.000Z",
    endDate: "2024-12-15T09:00:00.000Z",
    numberOfHours: "35",
    certificateId: "556677",
    averagedGrade: 87,
    description:
      "Explore the principles and methodologies used in software development.",
  },
];
export const quizzes = {
  $id: "1",
  $values: [
    {
      $id: "2",
      quizId: 1,
      title: "Asp.Net",
      duration: 30,
      isVisible: true,
      courseId: 21,
      mark: 10,
      startTime: "2024-11-12T13:59:40.333",
      endTime: "2024-11-13T13:59:40.333",
      quizResult: {
        $id: "3",
        id: 1,
        quizId: 1,
        studentId: 21,
        score: 5,
        numbersOfCorrectAnswers: 1,
        submittedAt: "2024-11-12T14:59:40.333",
        answers: {
          $id: "4",
          $values: [],
        },
      },
    },
    {
      $id: "5",
      quizId: 2,
      title: "C# Basics",
      duration: 40,
      isVisible: true,
      courseId: 22,
      mark: 15,
      startTime: "2024-12-14T10:00:00.000",
      endTime: "2024-12-14T10:40:00.000",
      quizResult: null,
    },
    {
      $id: "5",
      quizId: 2,
      title: "C# Basics",
      duration: 40,
      isVisible: true,
      courseId: 22,
      mark: 15,
      startTime: "2024-11-14T10:00:00.000",
      endTime: "2024-11-14T10:40:00.000",
      quizResult: null,
    },
    {
      $id: "2",
      quizId: 1,
      title: "Asp.Net",
      duration: 30,
      isVisible: true,
      courseId: 21,
      mark: 10,
      startTime: "2024-11-12T13:59:40.333",
      endTime: "2024-11-30T13:59:40.333",
      quizResult: null,
    },
  ],
};
