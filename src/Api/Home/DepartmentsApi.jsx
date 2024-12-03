import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

export const getDepartments = createAsyncThunk(
    "departments/getDepartments",
    async () => {
      try {
        const response = await baseUrl.get("/Department", {
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