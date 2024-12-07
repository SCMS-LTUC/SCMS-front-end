import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

export const fetchCourseGrades = createAsyncThunk(
  "grades/fetchCourseGrades",
  async (courseId) => {
    try {
      const response = await baseUrl.get(`/Courses/${courseId}/grades`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const grades = response.data.$values;
      const mappedGrades = grades.map((grade) => ({
        studentId: grade.studentId,
        studentName: grade.studentName,
        averageGrades: grade.averageGrades,
        assignments: grade.assignments,
        quizzes: grade.quizzes,
      }));
      return mappedGrades;
    } catch (error) {
      console.error("Error fetching course grades:", error);
      throw error;
    }
  }
);

export const submitGrades = createAsyncThunk(
  "grades/submitGrades",
  async (courseId, { rejectWithValue }) => {
    try {
      console.log("this is the course Id from submitGrades", courseId);
      const response = await baseUrl.get(
        `/Certificates/${courseId}/complete-grading`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Error response:", error.response.data);
        return rejectWithValue(
          error.response.data.message || JSON.stringify(error.response.data)
        );
        // return rejectWithValue(error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Error request:", error.request);
        return rejectWithValue("No response received from server");
      } else {
        // Something else happened
        console.error("Error message:", error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);
