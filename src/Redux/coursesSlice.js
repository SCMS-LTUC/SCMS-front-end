// src/store/coursesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../../src/Api/BaseUrl';

export const fetchTeacherCourses = createAsyncThunk(
  'courses/fetchTeacherCourses',
  async () => {
    try {
    const response = await baseUrl.get('/Courses/Teacher/l/AllCourses', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        }
    );
      // Ensure response.data.$values is an array
      if (!response.data.$values || !Array.isArray(response.data.$values)) {
        throw new Error("Invalid API response format");
      }
      const mappedCourses = response.data.$values.map(course => ({
        ...course,
        courseId: Number(course.courseId), // Ensure 'courseId' is a number
        days: Array.isArray(course.days?.$values) ? course.days.$values : [], // Extract 'days' as an array
      }));

      console.log('Mapped Courses:', mappedCourses); // Debug: Log the mapped courses

      return mappedCourses;
    } catch (error) {
      console.error('Error fetching teacher courses:', error);
      throw error;
    }
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    teacherCourses: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeacherCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTeacherCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.teacherCourses = action.payload;
      })
      .addCase(fetchTeacherCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;