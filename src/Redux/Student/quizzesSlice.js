import { createSlice } from "@reduxjs/toolkit";
import { 
    fetchQuizzes,
    fetchQuiz,
    submitQuiz,
    calculateScore
} from "../../Api/Student/QuizApi";

const quizzesSlice = createSlice({
    name: "studentQuizzes",
    initialState: {
        quizzes: [],
        quiz: {},
        quizResult: {},
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchQuizzes.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchQuizzes.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.quizzes = action.payload;
        })
        .addCase(fetchQuizzes.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(fetchQuiz.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchQuiz.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.quiz = action.payload;
        })
        .addCase(fetchQuiz.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(submitQuiz.pending, (state) => {
            state.status = "loading";
        })
        .addCase(submitQuiz.fulfilled, (state) => {
            state.status = "succeeded";
        })
        .addCase(submitQuiz.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(calculateScore.pending, (state) => {
            state.status = "loading";
        })
        .addCase(calculateScore.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.quizResult = action.payload;
        })
        .addCase(calculateScore.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});

export default quizzesSlice.reducer;