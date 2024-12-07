import { createSlice } from "@reduxjs/toolkit";
import { 
    fetchQuizzes,
    createQuiz,
    deleteQuiz,
    fetchQuizSubmissions
} from "../../Api/Teacher/QuizApi";

const quizSlice = createSlice({
    name: "quizzes",
    initialState: {
      quizzes: [],
      submissions: [],
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
        .addCase(createQuiz.pending, (state) => {
        state.status = "loading";
        })
        .addCase(createQuiz.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.quizzes.push(action.payload);
        })
        .addCase(createQuiz.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        })
        .addCase(deleteQuiz.pending, (state) => {
        state.status = "loading";
        })
        .addCase(deleteQuiz.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.quizzes = state.quizzes.filter((quiz) => quiz.id !== action.payload);
        })
        .addCase(deleteQuiz.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        })
        .addCase(fetchQuizSubmissions.pending, (state) => {
        state.status = "loading";
        })
        .addCase(fetchQuizSubmissions.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("Submissions fetched:", action.payload);
        state.submissions = action.payload;
        })
        .addCase(fetchQuizSubmissions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        });
        // .addCase(createQuestion.pending, (state) => {
        // state.status = "loading";
        // })
        // .addCase(createQuestion.fulfilled, (state) => {
        // state.status = "succeeded";
        // })
        // .addCase(createQuestion.rejected, (state, action) => {
        // state.status = "failed";
        // state.error = action.error.message;
        // })
        // .addCase(createAnswerOption.pending, (state) => {
        // state.status = "loading";
        // })
        // .addCase(createAnswerOption.fulfilled, (state) => {
        // state.status = "succeeded";
        // })
        // .addCase(createAnswerOption.rejected, (state, action) => {
        // state.status = "failed";
        // state.error = action.error.message;
        // });
    },
});
  
export default quizSlice.reducer;