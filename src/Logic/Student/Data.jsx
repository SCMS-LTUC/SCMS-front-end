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
      $id: "2",
      quizId: 3,
      title: "Midterm",
      duration: 30,
      isVisible: true,
      courseId: 21,
      mark: 10,
      startTime: "2024-11-12T13:59:40.333",
      endTime: "2024-11-30T13:59:40.333",
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
  ],
};
export const quiz = {
  $id: "1",
  title: "Midterm Exam",
  duration: 30,
  mark: 10,
  startTime: "2024-11-12T13:59:40.333",
  endTime: "2024-11-13T13:59:40.333",
  isVisible: true,
  courseId: 21,
  questions: {
    $id: "2",
    $values: [
      {
        $id: "3",
        questionId: 1,
        text: "What is the type of application that can be built using asp.net?",
        quizId: 1,
        answerOptions: {
          $id: "4",
          $values: [
            {
              $id: "5",
              answerOptionId: 1,
              text: "web app only",
              isCorrect: false,
              questionId: 1,
            },
            {
              $id: "6",
              answerOptionId: 2,
              text: "mobile app only",
              isCorrect: false,
              questionId: 1,
            },
            {
              $id: "7",
              answerOptionId: 3,
              text: "desktop app only",
              isCorrect: false,
              questionId: 1,
            },
            {
              $id: "8",
              answerOptionId: 4,
              text: "desktop, mobile, and web app",
              isCorrect: true,
              questionId: 1,
            },
          ],
        },
      },
      {
        $id: "9",
        questionId: 2,
        text: "What is your name?",
        quizId: 1,
        answerOptions: {
          $id: "10",
          $values: [
            {
              $id: "11",
              answerOptionId: 5,
              text: "Yara",
              isCorrect: false,
              questionId: 2,
            },
          ],
        },
      },
    ],
  },
};
export const quizResult = {
  correctAnswersCount: 3,
  totalQuestionsCount: 5,
  quizMark: 75,
  score: 60,
};
export const assignments = {
  $id: "1",
  $values: [
    {
      $id: "2",
      assignmentId: 20,
      assignmentName: "MathAssignment",
      dueDate: "2024-11-25T23:59:00.000",
      mark: 20,
      studentAssignment: {
        $id: "3",
        studentAssignmentId: 22,
        submissionDate: "2024-11-24T18:45:15.123",
        grade: 18,
        feedback: "Well done, but needs improvement in presentation.",
      },
    },
    {
      $id: "4",
      assignmentId: 21,
      assignmentName: "ScienceExperiment",
      dueDate: "2024-11-30T23:59:00.000",
      mark: 25,
      studentAssignment: {
        $id: "5",
        studentAssignmentId: 23,
        submissionDate: "2024-11-30T22:15:00.000",
        grade: null,
        feedback: "",
      },
    },
    {
      $id: "6",
      assignmentId: 22,
      assignmentName: "HistoryEssay",
      dueDate: "2024-12-05T23:59:00.000",
      mark: 30,
      studentAssignment: null,
    },
  ],
};
export const assignment = {
  $id: "1",
  assignmentId: "1",
  assignmentName: "MathHomework1",
  dueDate: "2024-12-01T23:59:59.000",
  description: "Complete the problems on pages 45-47 from the textbook.",
  visible: true,
  fullMark: 20,
};
export const studentAssignment = {
  $id: "1",
  studentAssignmentId: 20,
  assignmentId: 18,
  studentId: 21,
  submissionDate: "2024-11-22T09:46:05.3006798",
  submission: "this is dima submission",
  grade: 15,
  feedback: "Great job! Keep up the good work.",
  filePath:
    "C:\\Users\\LTUC\\source\\repos\\SCMS-back-end\\SCMS-back-end\\Uploads\\commonStyles_117ca74d-8374-4e21-904e-57af9e4de9fe.txt",
};
export const studentAbsenceDates = {
  $id: "1",
  $values: [
    {
      $id: "2",
      lectureDate: "2024-11-04T13:00:00",
    },
    {
      $id: "3",
      lectureDate: "2024-11-09T13:00:00",
    },
  ],
};
export const courseLectures = {
  $id: "1",
  $values: [
    {
      $id: "2",
      lectureId: 178,
      courseId: 21,
      lectureDate: "2024-09-04T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "3",
        $values: [],
      },
    },
    {
      $id: "4",
      lectureId: 179,
      courseId: 21,
      lectureDate: "2024-09-09T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "5",
        $values: [],
      },
    },
    {
      $id: "6",
      lectureId: 180,
      courseId: 21,
      lectureDate: "2024-09-11T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "7",
        $values: [],
      },
    },
    {
      $id: "8",
      lectureId: 181,
      courseId: 21,
      lectureDate: "2024-09-16T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "9",
        $values: [],
      },
    },
    {
      $id: "10",
      lectureId: 182,
      courseId: 21,
      lectureDate: "2024-09-18T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "11",
        $values: [],
      },
    },
    {
      $id: "12",
      lectureId: 183,
      courseId: 21,
      lectureDate: "2024-09-23T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "13",
        $values: [],
      },
    },
    {
      $id: "14",
      lectureId: 184,
      courseId: 21,
      lectureDate: "2024-09-25T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "15",
        $values: [],
      },
    },
    {
      $id: "16",
      lectureId: 185,
      courseId: 21,
      lectureDate: "2024-09-30T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "17",
        $values: [],
      },
    },
    {
      $id: "18",
      lectureId: 186,
      courseId: 21,
      lectureDate: "2024-10-02T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "19",
        $values: [],
      },
    },
    {
      $id: "20",
      lectureId: 187,
      courseId: 21,
      lectureDate: "2024-10-07T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "21",
        $values: [],
      },
    },
    {
      $id: "22",
      lectureId: 188,
      courseId: 21,
      lectureDate: "2024-10-09T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "23",
        $values: [],
      },
    },
    {
      $id: "24",
      lectureId: 189,
      courseId: 21,
      lectureDate: "2024-10-14T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "25",
        $values: [],
      },
    },
    {
      $id: "26",
      lectureId: 190,
      courseId: 21,
      lectureDate: "2024-10-16T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "27",
        $values: [],
      },
    },
    {
      $id: "28",
      lectureId: 191,
      courseId: 21,
      lectureDate: "2024-10-21T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "29",
        $values: [],
      },
    },
    {
      $id: "30",
      lectureId: 192,
      courseId: 21,
      lectureDate: "2024-10-23T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "31",
        $values: [],
      },
    },
    {
      $id: "32",
      lectureId: 193,
      courseId: 21,
      lectureDate: "2024-10-28T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "33",
        $values: [],
      },
    },
    {
      $id: "34",
      lectureId: 194,
      courseId: 21,
      lectureDate: "2024-10-30T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "35",
        $values: [],
      },
    },
    {
      $id: "36",
      lectureId: 195,
      courseId: 21,
      lectureDate: "2024-11-04T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "37",
        $values: [],
      },
    },
    {
      $id: "38",
      lectureId: 196,
      courseId: 21,
      lectureDate: "2024-11-06T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "39",
        $values: [],
      },
    },
    {
      $id: "40",
      lectureId: 197,
      courseId: 21,
      lectureDate: "2024-11-11T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "41",
        $values: [],
      },
    },
    {
      $id: "42",
      lectureId: 198,
      courseId: 21,
      lectureDate: "2024-11-13T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "43",
        $values: [],
      },
    },
    {
      $id: "44",
      lectureId: 199,
      courseId: 21,
      lectureDate: "2024-11-18T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "45",
        $values: [],
      },
    },
    {
      $id: "46",
      lectureId: 200,
      courseId: 21,
      lectureDate: "2024-11-20T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "47",
        $values: [],
      },
    },
    {
      $id: "48",
      lectureId: 201,
      courseId: 21,
      lectureDate: "2024-11-25T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "49",
        $values: [],
      },
    },
    {
      $id: "50",
      lectureId: 202,
      courseId: 21,
      lectureDate: "2024-11-27T13:00:00",
      course: null,
      lectureAttendances: {
        $id: "51",
        $values: [],
      },
    },
  ],
};
export const currentCourse = {
  $id: "1",
  courseId: 21,
  teacherName: "Rana",
  teacherId: 3,
  teacherDepartment: "Computer Science",
  subjectName: "Web Development",
  startDate: "2024-09-01T00:00:00",
  endDate: "2024-12-01T00:00:00",
  startTime: "13:30:00",
  endTime: "15:00:00",
  days: {
    $id: "2",
    $values: ["Monday", "Wednesday"],
  },
  className: "Web Development",
  capacity: 200,
  classroomNumber: "1A",
};
export const students = [
  {
    studentId: 1,
    studentName: "John Doe",
    studentUserName: "johndoe",
    studentEmail: "johndoe@gmail.com",
  },
  {
    studentId: 2,
    studentName: "Dima Salem",
    studentUserName: "DimaSalem",
    studentEmail: "johndoe@gmail.com",
  },
  {
    studentId: 3,
    studentName: "Leen Yasir",
    studentUserName: "LeenYasir",
    studentEmail: "LeenYasir@gmail.com",
  },
];
