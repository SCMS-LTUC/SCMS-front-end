// src/store/coursesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTeacherCourses,
  fetchTeacherCourse,
} from "../../Api/Teacher/CourseApi";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    teacherCourses: [],
    currentCourses: {},
    status: "idle",
    error: null,
    loading: null,
  },
  reducers: {
    setCurrentCourse: (state, action) => {
      state.currentCourses = action.payload;
    },
    clearCurrentCourse: (state) => {
      state.currentCourses = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeacherCourses.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchTeacherCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.teacherCourses = action.payload;
      })
      .addCase(fetchTeacherCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(fetchTeacherCourse.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchTeacherCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.currentCourses = action.payload;
      })
      .addCase(fetchTeacherCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
