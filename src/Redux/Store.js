// src/Redux/Store.js
import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './coursesSlice';
import userReducer from '../reducers/userReducer'; // Import additional reducers as needed
import announcementsReducer from './announcementsSlice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    user: userReducer, // Add other reducers here
    announcements : announcementsReducer,
  },
});

export default store;