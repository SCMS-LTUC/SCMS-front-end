import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

export const fetchCourseAnnouncements = createAsyncThunk(
    'announcements/fetchCourseAnnouncements',
    async (courseId) => {
      try {
        const response = await baseUrl.get(`/Announcement/Course/${courseId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          }
        );
        // Assuming the API returns an array of announcements
        return response.data.$values;
      } catch (error) {
        // Return a rejected promise with error message for better error handling
        console.error("Error fetching assignments:", error);
        throw error;
      }
    }
);

export const createAnnouncement = createAsyncThunk(
  "announcements/createAnnouncement",
  async ({ courseId, announcement }) => {
    try {
      const response = await baseUrl.post(`/Announcement/Course/${courseId}`, announcement, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("API Response:", response.data); // Add this line
      return response.data;
    } catch (error) {
      console.error("Error creating announcement:", error);
      throw error;
    }
  }
);

export const editAnnouncement = createAsyncThunk(
  "announcements/editAnnouncement",
  async ({ announcementId, announcement }) => {
    try {
      const response = await baseUrl.put(`/Announcement/${announcementId}`, announcement, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("API Response:", response.data); // Add this line
      return response.data;
    } catch (error) {
      console.error("Error editing announcement:", error);
      throw error;
    }
  }
);

export const deleteAnnouncement = createAsyncThunk(
  "announcements/deleteAnnouncement",
  async ({ announcementId }) => {
    try {
      await baseUrl.delete(`/Announcement/${announcementId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return announcementId;
    } catch (error) {
      console.error("Error deleting announcement:", error);
      throw error;
    }
  }
);