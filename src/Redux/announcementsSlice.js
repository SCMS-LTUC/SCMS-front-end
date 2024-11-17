// src/Redux/announcementsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../Api/BaseUrl';

// Async thunk to fetch announcements for a specific course
export const fetchCourseAnnouncements = createAsyncThunk(
  'announcements/fetchCourseAnnouncements',
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/Announcement/Course/${courseId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        }
      );
      // Assuming the API returns an array of announcements
        console.log('Announcements:', response.data.$values); // Debug: Log the fetched announcements
      return response.data.$values;
    } catch (error) {
      // Return a rejected promise with error message for better error handling
      return rejectWithValue(error.response.data || 'Failed to fetch announcements.');
    }
  }
);

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
      });
  },
});

export default announcementsSlice.reducer;