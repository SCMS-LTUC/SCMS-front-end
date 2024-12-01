import { createSlice } from "@reduxjs/toolkit";
import { 
    fetchCourseLectures
} from "../../Api/Teacher/LectureApi";

const lecturesSlice = createSlice({
    name: "lectures",
    initialState: {
      lectures: [],
      status: "idle",
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCourseLectures.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchCourseLectures.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.lectures = action.payload;
        })
        .addCase(fetchCourseLectures.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
    },
});

export default lecturesSlice.reducer;