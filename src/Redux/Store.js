// src/Redux/Store.js
import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Teacher/coursesSlice";
import userReducer from "../reducers/userReducer"; // Import additional reducers as needed
import announcementsReducer from "./announcementsSlice";
import snackbarReducer from "./SnackbarSlice";
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
    studentCourses: studentCoursesReduder,
    studentAnnouncements: studentAnnouncementsReducer,
    studentQuizzes: studentQuizzesReducer,
    studentAssignments: studentAssignmentsReducer,
    studentAttendance: studentAttendanceReducer,
    studentGrades: studentGradesReducer,
  },
});

export default store;
