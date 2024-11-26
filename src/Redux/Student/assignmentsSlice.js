import { createSlice } from "@reduxjs/toolkit";
import {
    getAssignments,
    submitAssignment,
    getAssignment,
    getAssignmentSubmission
} from "../../Api/Student/AssignmentApi";

const assignmentsSlice = createSlice({
    name: "studentAssignments",
    initialState: {
        assignments: [],
        assignment: {},
        studentAssignment: {},
        status: "idle",
        error: null,
        loading: null,
    },
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        clearAssignments: (state) => {
            state.assignments = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAssignments.pending, (state) => {
                state.status = "loading";
                state.loading = true;
            })
            .addCase(getAssignments.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.loading = false;
                state.assignments = action.payload;
            })
            .addCase(getAssignments.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(getAssignment.pending, (state) => {
                state.status = "loading";
                state.loading = true;
            })
            .addCase(getAssignment.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.loading = false;
                state.assignment = action.payload;
            })
            .addCase(getAssignment.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(submitAssignment.pending, (state) => {
                state.status = "loading";
                state.loading = true;
            })
            .addCase(submitAssignment.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.loading = false;
                state.assignment = action.payload;
            })
            .addCase(submitAssignment.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(getAssignmentSubmission.pending, (state) => {
                state.status = "loading";
                state.loading = true;
            })
            .addCase(getAssignmentSubmission.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.loading = false;
                state.studentAssignment = action.payload;
            })
            .addCase(getAssignmentSubmission.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default assignmentsSlice.reducer;