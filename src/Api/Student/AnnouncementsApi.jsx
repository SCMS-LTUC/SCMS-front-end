import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

export const fetchStudentAnnouncements = createAsyncThunk(
    "studentAnnouncements/fetchStudentAnnouncements",
    async () => {
      try {
        const response = await baseUrl.get("/Announcement/Students", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        // Assuming the API returns an array of announcements
        return response.data.$values;
        } catch (error) {
        // Return a rejected promise with error message for better error handling
        console.error("Error fetching assignments:", error);
        throw error;
        }
    }
);

export const fetchCourseAnnouncements = createAsyncThunk(
    'studentAnnouncements/fetchCourseAnnouncements',
    async (courseId) => {
      try {
        const response = await baseUrl.get(`/Announcement/Course/${courseId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          }
        );
        // Assuming the API returns an array of announcements
        console.log(response.data.$values);
        return response.data.$values;
      } catch (error) {
        // Return a rejected promise with error message for better error handling
        console.error("Error fetching assignments:", error);
        throw error;
      }
    }
);
