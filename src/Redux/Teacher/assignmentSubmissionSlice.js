import { createSlice } from "@reduxjs/toolkit";
import { fetchAssignmentSubmissions, fetchAssignmentSubmission, gradeSubmission, gradeSubmissionNotSubmitted } from "../../Api/Teacher/AssignmentApi";

const assignmentSubmissionsSlice = createSlice({
    name: "assignmentSubmissions",
    initialState: {
      submissions: [],
      submission: {},
      status: "idle",
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAssignmentSubmissions.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchAssignmentSubmissions.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.submissions = action.payload;
        })
        .addCase(fetchAssignmentSubmissions.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
        .addCase(fetchAssignmentSubmission.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchAssignmentSubmission.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.submission = action.payload;
        })
        .addCase(fetchAssignmentSubmission.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
        .addCase(gradeSubmission.pending, (state) => {
          state.status = "loading";
        })
        .addCase(gradeSubmission.fulfilled, (state, action) => {
          const index = state.submissions.findIndex(
            (submission) => submission.id === action.payload.id
          );
          if (index !== -1) {
            state.submissions[index] = action.payload;
          }
        })
        .addCase(gradeSubmission.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
        .addCase(gradeSubmissionNotSubmitted.pending, (state) => {
          state.status = "loading";
        })
        .addCase(gradeSubmissionNotSubmitted.fulfilled, (state, action) => {
          const index = state.submissions.findIndex(
            (submission) => submission.id === action.payload.id
          );
          if (index !== -1) {
            state.submissions[index] = action.payload;
          }
        })
        .addCase(gradeSubmissionNotSubmitted.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
  });
  
  export default assignmentSubmissionsSlice.reducer;