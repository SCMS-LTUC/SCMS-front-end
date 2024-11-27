import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

export const fetchCourseLectures= createAsyncThunk(
    "Lectures/fetchCourseLectures",
    async (courseId) => {
        try {
        const response = await baseUrl.get(`/Lectures/${courseId}`, {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        const lectureAttendance = response.data.$values;
        const mappedLectureAttendance = lectureAttendance.map((lecture) => ({
            lectureId: lecture.id,
            lectureDate: lecture.lectureTime,
        }));
        return mappedLectureAttendance;
        } catch (error) {
        console.error("Error fetching course lecture attendance:", error);
        throw error;
        }
    }
);

export const submitAttendance = createAsyncThunk(
    "Lectures/submitAttendance",
    async ( attendanceData ) => {
        try {
        const response = await baseUrl.post(`/LectureAttendance`, attendanceData, {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        return response.data;
        } catch (error) {
        console.error("Error submitting attendance:", error);
        throw error;
        }
    }
);

export const fetchAttendanceSummary = createAsyncThunk(
    "Lectures/fetchAttendanceSummary",
    async (courseId) => {
        try {
        const response = await baseUrl.get(`/LectureAttendance/${courseId}`, {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        return response.data.$values;
        } catch (error) {
        console.error("Error fetching attendance summary:", error);
        throw error;
        }
    }
);