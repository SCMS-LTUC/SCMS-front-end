import { createSlice } from "@reduxjs/toolkit";
import {
    fetchCourseAnnouncements,
    fetchStudentAnnouncements 
} from "../../Api/Student/AnnouncementsApi";

const announcementsSlice = createSlice({
    name: 'studentAnnouncements',
    initialState: {
      announcements: [],
      courseAnnouncements: [],
      status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
      error: null,
    },
    reducers: {
      // You can add non-async reducers here if needed
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCourseAnnouncements.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchCourseAnnouncements.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.courseAnnouncements = action.payload;
        })
        .addCase(fetchCourseAnnouncements.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload || action.error.message;
        })
        .addCase(fetchStudentAnnouncements.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchStudentAnnouncements.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.announcements = action.payload;
        })
        .addCase(fetchStudentAnnouncements.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload || action.error.message;
        });
    },
  });
  
  export default announcementsSlice.reducer;