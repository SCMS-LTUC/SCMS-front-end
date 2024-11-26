import { createSlice } from "@reduxjs/toolkit";
import { 
    getStudentGrades
} from "../../Api/Student/GradesApi";

const gradesSlice = createSlice({
    name: "studentGrades",
    initialState: {
        studentGrades: {},
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getStudentGrades.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getStudentGrades.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.studentGrades = action.payload;
        })
        .addCase(getStudentGrades.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    },
});

export default gradesSlice.reducer;