import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

export const fetchQuizzes = createAsyncThunk(
  "studentQuizzes/fetchQuizzes",
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await baseUrl.get(`/quiz/course/${courseId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return response.data.$values;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchQuiz = createAsyncThunk(
  "studentQuizzes/fetchQuiz",
  async (quizId, { rejectWithValue }) => {
    try {
      const response = await baseUrl.get(`/Quiz/${quizId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      // const mappedQuiz = {
      //     id: response.data.quizId,
      //     title: response.data.title,
      //     duration: response.data.duration,
      //     mark: response.data.mark,
      //     startTime: response.data.startTime,
      //     endTime: response.data.endTime,
      //     isVisible: response.data.isVisible,
      //     courseId: response.data.courseId,
      //     questions: response.data.questions.$values.map((question) => {
      //         return {
      //             questionId: question.questionId,
      //             text: question.text,
      //             quizId: question.quizId,
      //             answerOptions: question.answerOptions.$values.map((answerOption) => {
      //                 return {
      //                     answerOptionId: answerOption.answerOptionId,
      //                     text: answerOption.text,
      //                     isCorrect: answerOption.isCorrect,
      //                     questionId: answerOption.questionId,
      //                 };
      //             }),
      //         };
      //     }),
      // };
      console.log("quiz===========", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const submitQuiz = createAsyncThunk(
  "studentQuizzes/submitQuiz",
  async (quizSubmission, { rejectWithValue }) => {
    try {
      const response = await baseUrl.post(
        `/StudentAnswer/post-quiz-result`,
        quizSubmission,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const calculateScore = createAsyncThunk(
  "studentQuizzes/calculateScore",
  async (quizId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No access token found");
      }

      console.log("quizId", quizId);
      console.log("Authorization: Bearer", token);
      const response = await baseUrl.post(
        `/StudentAnswer/calculate-score?quizId=${quizId}`,
        null,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchQuizResult = createAsyncThunk(
  "studentQuizzes/fetchQuizResult",
  async (quizId, { rejectWithValue }) => {
    try {
      const response = await baseUrl.get(
        `/StudentAnswer/get-saved-score?quizId=${quizId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      console.log("quiz result===========", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
