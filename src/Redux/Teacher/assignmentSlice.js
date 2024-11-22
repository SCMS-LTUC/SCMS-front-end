import { createSlice } from "@reduxjs/toolkit";
import { fetchAssignments, createAssignment, fetchAssignment, updateAssignment, deleteAssignment } from "../../Api/Teacher/AssignmentApi";

const assignmentSlice = createSlice({
    name: "assignments",
    initialState: {
      assignments: [],
      assignment: {},
      status: "idle",
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAssignments.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchAssignments.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.assignments = action.payload;
        })
        .addCase(fetchAssignments.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
        .addCase(createAssignment.fulfilled, (state, action) => {
          state.assignments.push(action.payload);
        })
        .addCase(fetchAssignment.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.assignment = action.payload;
        })
        .addCase(fetchAssignment.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
        .addCase(fetchAssignment.pending, (state) => {
          state.status = "loading";
        })
        .addCase(updateAssignment.fulfilled, (state, action) => {
          state.assignment = action.payload;
        })
        .addCase(deleteAssignment.fulfilled, (state, action) => {
          state.assignments = state.assignments.filter(
            (assignment) => assignment.assignmentId !== action.payload.assignmentId
          );
        });

    },
});
  
export default assignmentSlice.reducer;

  