import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

const transformApiResponse = (apiResponse) => {
    return {
      overallGrade: apiResponse.overallGrade,
      quizzesGrade: apiResponse.quizzesGrade,
      assignmentsGrade: apiResponse.assignmentsGrade,
      assignments: apiResponse.assignments.$values.map(assignment => ({
        title: assignment.title,
        fullMark: assignment.fullMark,
        achievedMark: assignment.achievedMark,
      })),
      quizzes: apiResponse.quizzes.$values.map(quiz => ({
        title: quiz.title,
        fullMark: quiz.fullMark,
        achievedMark: quiz.achievedMark,
      })),
    };
  };

export const getStudentGrades = createAsyncThunk(
    "studentGrades/getStudentGrades",
    async (courseId, { rejectWithValue }) => {
        try {
            const response = await baseUrl.get(`/Courses/${courseId}/grades/student`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            const transformedData = transformApiResponse(response.data);
            return transformedData;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);