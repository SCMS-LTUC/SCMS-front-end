import { createSlice } from "@reduxjs/toolkit";
import { fetchCourseGrades, submitGrades } from "../../Api/Teacher/GradesApi";

const gradesSlice = createSlice({
  name: "grades",
  initialState: {
    grades: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseGrades.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourseGrades.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.grades = action.payload;
      })
      .addCase(fetchCourseGrades.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(submitGrades.pending, (state) => {
        state.status = "loading complete grading";
      })
      .addCase(submitGrades.fulfilled, (state) => {
        state.status = "succeeded complete grading";
      })
      .addCase(submitGrades.rejected, (state, action) => {
        state.status = "failed complete grading";
        state.error = action.payload || action.error.message;
      });
  },
});

export default gradesSlice.reducer;
