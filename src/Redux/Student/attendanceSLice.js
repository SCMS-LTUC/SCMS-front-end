import { createSlice } from "@reduxjs/toolkit";
import {
    getCourseLectures,
    getStudentAbsenceDates
} from "../../Api/Student/AttendanceApi";

const attendanceSlice = createSlice({
    name: "studentAttendance",
    initialState: {
        courseLectures: [],
        studentAbsenceDates: {},
        status: "idle",
        error: null,
        loading: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCourseLectures.pending, (state) => {
                state.status = "loading";
                state.loading = true;
            })
            .addCase(getCourseLectures.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.loading = false;
                state.courseLectures = action.payload;
            })
            .addCase(getCourseLectures.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(getStudentAbsenceDates.pending, (state) => {
                state.status = "loading";
                state.loading = true;
            })
            .addCase(getStudentAbsenceDates.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.loading = false;
                state.studentAbsenceDates = action.payload;
            })
            .addCase(getStudentAbsenceDates.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default attendanceSlice.reducer;
