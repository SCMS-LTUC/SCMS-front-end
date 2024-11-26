import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

export const getAssignments = createAsyncThunk(
    "studentassignment/getAssignments",
    async (courseId, { rejectWithValue }) => {
        try {
            const response = await baseUrl.get(`/Assignment/Courses/${courseId}/student/assignments`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            return response.data.$values;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getAssignment = createAsyncThunk(
    "studentAssignments/getAssignment",
    async (assignmentId, { rejectWithValue }) => {
        try {
            const response = await baseUrl.get(`/Assignment/${assignmentId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            console.log("api response",response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const submitAssignment = createAsyncThunk(
    "studentAssignments/submitAssignment",
    async ({ assignmentId, submission, file }, { rejectWithValue }) => {
      try {
        const formData = new FormData();
        formData.append("AssignmentId", assignmentId);
        formData.append("Submission", submission);
        formData.append("File", file);
  
        const response = await baseUrl.post(`/StudentAssignments/submit-assignment`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "multipart/form-data",
          },
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const getAssignmentSubmission = createAsyncThunk(
    "studentAssignments/getAssignmentSubmission",
    async (studentAssignmentId, { rejectWithValue }) => {
        try {
            const response = await baseUrl.get(`/StudentAssignments/${studentAssignmentId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            console.log("api response",response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);