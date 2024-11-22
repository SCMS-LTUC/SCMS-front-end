import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

export const fetchQuizzes = createAsyncThunk(
    "quizzes/fetchQuizzes",
    async () => {
      try {
        const response = await baseUrl.get(`/Quiz`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        if (!response.data.$values || !Array.isArray(response.data.$values)) {
          throw new Error("Invalid API response format");
        }
        const mappedQuizzes = response.data.$values.map((quiz) => ({
            id: quiz.quizId,
            title: quiz.title,
            duration: quiz.duration,
            mark: quiz.mark,
            startTime: quiz.startTime,
            endTime: quiz.endTime,
            isVisible: quiz.isVisible,
            courseId: quiz.courseId,
            questions: quiz.questions.$values.map((question) => ({
                questionId: question.questionId,
                text: question.text,
                quizId: question.quizId,
                answerOptions: question.answerOptions.$values.map((answerOption) => ({
                answerOptionId: answerOption.answerOptionId,
                text: answerOption.text,
                isCorrect: answerOption.isCorrect,
                questionId: answerOption.questionId,
                })),
            })),
        }));
        console.log("Quizzes fetched:", mappedQuizzes);
        return mappedQuizzes;
      } catch (error) {
        console.error("Error fetching quizzes:", error);
        throw error;
      }
    }
);

export const createQuiz = createAsyncThunk(
    "quizzes/createQuiz",
    async (quiz) => {
      try {
        const response = await baseUrl.post(`/Quiz`, quiz, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error creating quiz:", error);
        throw error;
      }
    }
);

// export const createQuestion = createAsyncThunk(
//     "quizzes/createQuestion",
//     async (question) => {
//       try {
//         const response = await baseUrl.post(`/Question`, question, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         });
//         return response.data;
//       } catch (error) {
//         console.error("Error creating question:", error);
//         throw error;
//       }
//     }
// );

// export const createAnswerOption = createAsyncThunk(
//     "quizzes/createAnswerOption",
//     async (answerOption) => {
//       try {
//         const response = await baseUrl.post(`/AnswerOption`, answerOption, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         });
//         return response.data;
//       } catch (error) {
//         console.error("Error creating answer option:", error);
//         throw error;
//       }
//     }
// );

export const addQuestion = createAsyncThunk(
    "questions/addQuestion",
    async (question) => {
      try {
        const response = await baseUrl.post(`/question`, question, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error adding question:", error);
        throw error;
      }
    }
);

export const editQuestion = createAsyncThunk(
    "questions/editQuestion",
    async ({ questionId, question }) => {
      try {
        const response = await baseUrl.put(`/question/${questionId}`, question, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error editing question:", error);
        throw error;
      }
    }
);

export const deleteQuestion = createAsyncThunk(
    "questions/deleteQuestion",
    async (questionId) => {
      try {
        await baseUrl.delete(`/question/${questionId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        return questionId;
      } catch (error) {
        console.error("Error deleting question:", error);
        throw error;
      }
    }
);

export const addAnswerOption = createAsyncThunk(
    "answerOptions/addAnswerOption",
    async (answerOption) => {
      try {
        const response = await baseUrl.post(`/Answeroption`, answerOption, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error adding answer option:", error);
        throw error;
      }
    }
);

export const editAnswerOption = createAsyncThunk(
    "answerOptions/editAnswerOption",
    async ({ answerOptionId, answerOption }) => {
      try {
        const response = await baseUrl.put(`/Answeroption/${answerOptionId}`, answerOption, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error editing answer option:", error);
        throw error;
      }
    }
);

export const deleteAnswerOption = createAsyncThunk(
    "answerOptions/deleteAnswerOption",
    async (answerOptionId) => {
      try {
        await baseUrl.delete(`/Answeroption/${answerOptionId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        return answerOptionId;
      } catch (error) {
        console.error("Error deleting answer option:", error);
        throw error;
      }
    }
);

export const editQuiz = createAsyncThunk(
    "quizzes/editQuiz",
    async ({ quizId, quiz }) => {
      try {
        const response = await baseUrl.put(`/quiz/${quizId}`, quiz, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error editing quiz:", error);
        throw error;
      }
    }
);

export const deleteQuiz = createAsyncThunk(
    "quizzes/deleteQuiz",
    async (quizId) => {
      try {
        await baseUrl.delete(`/quiz/${quizId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        return quizId;
      } catch (error) {
        console.error("Error deleting quiz:", error);
        throw error;
      }
    }
);