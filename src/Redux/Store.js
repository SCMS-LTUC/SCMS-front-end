// src/Redux/Store.js
import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Teacher/coursesSlice";
import userReducer from "../reducers/userReducer"; // Import additional reducers as needed
import announcementsReducer from "./Teacher/announcementsSlice";
import snackbarReducer from "./SnackbarSlice";
import classListReducer from "./Teacher/classListSlice";
import assignmentReducer from "./Teacher/assignmentSlice";
import assignmentSubmissionReducer from "./Teacher/assignmentSubmissionSlice";
import quizReducer from "./Teacher/quizSlice";
import lecturesReducer from "./Teacher/LecturesSlice";
import teacherAnnouncementsReducer from "./Teacher/teacherAnnouncementsSlice";

import studentCoursesReduder from "./Student/coursesSlice";
import studentAnnouncementsReducer from "./Student/announcementsSlice";
import studentQuizzesReducer from "./Student/quizzesSlice";
import studentAssignmentsReducer from "./Student/assignmentsSlice";
import studentAttendanceReducer from "./Student/attendanceSLice";
import studentGradesReducer from "./Student/gradesSlice";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    user: userReducer, // Add other reducers here
    announcements: announcementsReducer,
    snackbar: snackbarReducer,
    classList: classListReducer,
    assignments: assignmentReducer,
    assignmentSubmissions: assignmentSubmissionReducer,
    quizzes: quizReducer,
    lectures: lecturesReducer,
    teacherAnnouncements: teacherAnnouncementsReducer,

    studentCourses: studentCoursesReduder,
    studentAnnouncements: studentAnnouncementsReducer,
    studentQuizzes: studentQuizzesReducer,
    studentAssignments: studentAssignmentsReducer,
    studentAttendance: studentAttendanceReducer,
    studentGrades: studentGradesReducer,
  },
});

export default store;
