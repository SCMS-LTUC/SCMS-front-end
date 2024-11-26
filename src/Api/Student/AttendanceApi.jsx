import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCourseLectures = createAsyncThunk(
    "studentAttendance/getCourseLectures",
    async (courseId) => {
        try {
            const response = await axios.get(`https://localhost:7219/lectures/${courseId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getStudentAbsenceDates = createAsyncThunk(
    "studentAttendance/getStudentAbsenceDates",
    async (courseId) => {
        try {
            const response = await axios.get(`https://localhost:7219/Student/${courseId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }
);