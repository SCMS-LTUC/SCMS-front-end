import { createSlice } from "@reduxjs/toolkit";
import { fetchClassList } from "../../Api/Teacher/ClassListApi";



const classListSlice = createSlice({
  name: "classList",
  initialState: {
    students: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClassList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClassList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.students = action.payload;
      })
      .addCase(fetchClassList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default classListSlice.reducer;