import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

export const fetchAssignments = createAsyncThunk(
    "assignments/fetchAssignments",
    async (courseId) => {
      try {
        const response = await baseUrl.get(`/Assignment/courses/${courseId}/assignments`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        console.log("API Response:", response.data); // Add this line
        if (!response.data.$values || !Array.isArray(response.data.$values)) {
          throw new Error("Invalid API response format");
        }
        const mappedAssignments = response.data.$values.map((assignment) => ({
          assignmentId: assignment.assignmentId,
          assignmentName: assignment.assignmentName,
          dueDate: assignment.dueDate,
          description: assignment.description,
          visible: assignment.visible,
          fullMark: assignment.fullMark,
        }));
        return mappedAssignments;
      } catch (error) {
        console.error("Error fetching assignments:", error);
        throw error;
      }
    }
);

export const fetchAssignment = createAsyncThunk(
  "assignment/fetchAssignment",
  async (assignmentId) => {
    try {
      const response = await baseUrl.get(`/Assignment/${assignmentId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching assignment:", error);
      throw error;
    }
  }
);

export const createAssignment = createAsyncThunk(
  "assignments/createAssignment",
  async ({ assignment }) => {
    try {
      const response = await baseUrl.post(`/Assignment`, assignment, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating assignment:", error);
      throw error;
    }
  }
);

export const updateAssignment = createAsyncThunk(
  "assignments/updateAssignment",
  async ({ assignmentId, assignment }) => {
    try {
      const response = await baseUrl.put(`/Assignment/${assignmentId}`, assignment, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error updating assignment:", error);
      throw error;
    }
  }
);

export const deleteAssignment = createAsyncThunk(
  "assignments/deleteAssignment",
  async (assignmentId) => {
    try {
      await baseUrl.delete(`/Assignment/${assignmentId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return { assignmentId };
    } catch (error) {
      console.error("Error deleting assignment:", error);
      throw error;
    }
  }
);

export const fetchAssignmentSubmissions = createAsyncThunk(
  "assignmentSubmissions/fetchAssignmentSubmissions",
  async (assignmentId) => {
    try {
      const response = await baseUrl.get(`/Assignment/${assignmentId}/submissions`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (!response.data.$values || !Array.isArray(response.data.$values)) {
        throw new Error("Invalid API response format");
      }
      const mappedSubmissions = response.data.$values.map((submission) => ({
        studentId: submission.studentId,
        fullName: submission.fullName,
        studentAssignment: submission.studentAssignment
          ? {
              studentAssignmentId: submission.studentAssignment.studentAssignmentId,
              submissionDate: submission.studentAssignment.submissionDate,
              grade: submission.studentAssignment.grade,
              feedback: submission.studentAssignment.feedback,
            }
          : null,
      }));
      return mappedSubmissions;
    } catch (error) {
      console.error("Error fetching assignment submissions:", error);
      throw error;
    }
  }
);

export const gradeSubmission = createAsyncThunk(
  "assignmentSubmissions/gradeSubmission",
  async ({ studentAssignmentId, grade, feedback }, { rejectWithValue }) => {
    try {
      const response = await baseUrl.post(`/StudentAssignments/AddStudentAssignmentFeedback`, {
        studentAssignmentId: Number(studentAssignmentId),
          grade: Number(grade),
          feedback: feedback,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error grading submission:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const gradeSubmissionNotSubmitted = createAsyncThunk(
  "assignmentSubmissions/gradeSubmissionNotSubmitted",
  async ({ grade, feedback }) => {
    try {
      const response = await baseUrl.post(`/studentAssignments`, {
        grade,
        feedback,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error grading submission:", error);
      throw error;
    }
  }
);

export const fetchAssignmentSubmission = createAsyncThunk(
  "assignmentSubmissions/fetchAssignmentSubmission",
  async (studentAssignmentId) => {
    try {
      const response = await baseUrl.get(`/studentAssignments/${studentAssignmentId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching assignment submission:", error);
      throw error;
    }
  }
);