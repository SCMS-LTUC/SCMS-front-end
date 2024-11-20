import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

export const fetchClassList = createAsyncThunk(
    "classList/fetchClassList",
    async (courseId) => {
      try {
        const response = await baseUrl.get(`/Students/course/${courseId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        if (!response.data.$values || !Array.isArray(response.data.$values)) {
          throw new Error("Invalid API response format");
        }
        const mappedStudents = response.data.$values.map((student) => ({
          studentId: Number(student.studentId),
          studentName: student.fullName,
          studentPhone: student.phoneNumber,
        }));
        return mappedStudents;
      } catch (error) {
        console.error("Error fetching class list:", error);
        throw error;
      }
    }
  );