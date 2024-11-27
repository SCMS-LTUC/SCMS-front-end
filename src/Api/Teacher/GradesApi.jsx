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