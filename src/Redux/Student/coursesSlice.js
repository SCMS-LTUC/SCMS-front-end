// src/store/coursesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
    fetchStudentCurrentCourses,
    fetchStudentCourse,
    fetchStudentPreviousCourses
} from "../../Api/Student/CoursesApi";
//import { currentCourses } from "../../Logic/Student/Data";

const coursesSlice = createSlice({
  name: "studentCourses",
  initialState: {
    currentCourses: [],
    previousCourses: [],
    course: {},
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
    .addCase(fetchStudentCurrentCourses.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        })
    .addCase(fetchStudentCurrentCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.currentCourses = action.payload;
        })
    .addCase(fetchStudentCurrentCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        });
    builder
    .addCase(fetchStudentPreviousCourses.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        })
    .addCase(fetchStudentPreviousCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.previousCourses = action.payload;
        })
    .addCase(fetchStudentPreviousCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        });
    builder
    .addCase(fetchStudentCourse.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        })
    .addCase(fetchStudentCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.course = action.payload;
        })
    .addCase(fetchStudentCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        });
  },
});

export default coursesSlice.reducer;