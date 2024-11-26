import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

export const getStudentGrades = createAsyncThunk(
    "studentGrades/getStudentGrades",
    async (courseId, { rejectWithValue }) => {
        try {
            const response = await baseUrl.get(`/Courses/${courseId}/grades/student`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);