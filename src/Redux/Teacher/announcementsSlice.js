import { createSlice } from "@reduxjs/toolkit";
import { fetchCourseAnnouncements, createAnnouncement, editAnnouncement, deleteAnnouncement } from "../../Api/Teacher/AnnouncementsApi";

// Async thunk to fetch announcements for a specific course
const announcementsSlice = createSlice({
  name: 'announcements',
  initialState: {
    announcements: [],
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
        state.announcements = action.payload;
      })
      .addCase(fetchCourseAnnouncements.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })
      .addCase(createAnnouncement.fulfilled, (state, action) => {
        state.announcements.push(action.payload);
      })
      .addCase(editAnnouncement.fulfilled, (state, action) => {
        const index = state.announcements.findIndex(
          (announcement) => announcement.id === action.payload.id
        );
        if (index !== -1) {
          state.announcements[index] = action.payload;
        }
      })
      .addCase(deleteAnnouncement.fulfilled, (state, action) => {
        state.announcements = state.announcements.filter(
          (announcement) => announcement.id !== action.payload
        );
      });
  },
});

export default announcementsSlice.reducer;