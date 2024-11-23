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

  },
});

export default store;
