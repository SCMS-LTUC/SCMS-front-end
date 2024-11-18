// src/Redux/Store.js
import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Teacher/coursesSlice";
import userReducer from "../reducers/userReducer"; // Import additional reducers as needed
import announcementsReducer from "./announcementsSlice";
import snackbarReducer from "./SnackbarSlice";
const store = configureStore({
  reducer: {
    courses: coursesReducer,
    user: userReducer, // Add other reducers here
    announcements: announcementsReducer,
    snackbar: snackbarReducer,
  },
});

export default store;
