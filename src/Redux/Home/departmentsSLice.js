import { createSlice } from "@reduxjs/toolkit";
import { getDepartments } from "../../Api/Home/DepartmentsApi";

const departmentsSlice = createSlice({
    name: "departments",
    initialState: {
        departments: [],
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {
        // You can add non-async reducers here if needed
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDepartments.pending, (state) => {
            state.status = "loading";
            state.error = null;
        })
        .addCase(getDepartments.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.departments = action.payload;
        })
        .addCase(getDepartments.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload || action.error.message;
        });
    },
});

export default departmentsSlice.reducer;