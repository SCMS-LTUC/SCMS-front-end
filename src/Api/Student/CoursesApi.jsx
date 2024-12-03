import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

export const fetchStudentCurrentCourses = createAsyncThunk(
  "studentCourses/fetchStudentCourses",
  async () => {
    try {
      const response = await baseUrl.get("/Courses/Student/1/AllCourses", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      // Ensure response.data.$values is an array
      if (!response.data.$values || !Array.isArray(response.data.$values)) {
        throw new Error("Invalid API response format");
      }
      const mappedCourses = response.data.$values
        .filter((course) => !course.isComplete) // Filter for courses where IsCompleted is false
        .map((course) => ({
          ...course,
          courseId: Number(course.courseId), // Ensure 'courseId' is a number
          days: Array.isArray(course.days?.$values) ? course.days.$values : [], // Extract 'days' as an array
        }));

      console.log("Mapped Courses:", mappedCourses); // Debug: Log the mapped courses

      return mappedCourses;
    } catch (error) {
      console.error("Error fetching teacher courses:", error);
      throw error;
    }
  }
);

export const fetchStudentPreviousCourses = createAsyncThunk(
  "studentCourses/fetchStudentPreviousCourses",
  async () => {
    try {
      const response = await baseUrl.get("/Courses/Student/l/AllCourses", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      // Ensure response.data.$values is an array
      if (!response.data.$values || !Array.isArray(response.data.$values)) {
        throw new Error("Invalid API response format");
      }
      const mappedCourses = response.data.$values
        .filter((course) => course.isComplete) // Filter for courses where IsCompleted is false
        .map((course) => ({
          ...course,
          courseId: Number(course.courseId), // Ensure 'courseId' is a number
          days: Array.isArray(course.days?.$values) ? course.days.$values : [], // Extract 'days' as an array
        }));

      console.log("Mapped Courses:", mappedCourses); // Debug: Log the mapped courses
      return mappedCourses;
    } catch (error) {
      console.error("Error fetching teacher courses:", error);
      throw error;
    }
  }
);

export const fetchStudentCourse = createAsyncThunk(
  "studentCourses/fetchStudentCourse",
  async (actions) => {
    try {
      const response = await baseUrl.get(`/Courses/${actions.courseId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      const course = response.data;
      const mappedCourse = {
        ...course,
        courseId: Number(course.courseId), // Ensure 'courseId' is a number
        days: Array.isArray(course.days?.$values) ? course.days.$values : [], // Extract 'days' as an array
      };

      console.log("Mapped Course:", mappedCourse); // Debug: Log the mapped courses

      return mappedCourse;
    } catch (error) {
      console.error("Error fetching teacher courses:", error);
      throw error;
    }
  }
);

export const fetchNotStartedCourses = createAsyncThunk(
  "studentCourses/fetchNotStartedCourses",
  async () => {
    try {
      const response = await baseUrl.get("/Courses/NotStarted", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      // Ensure response.data.$values is an array
      // if (!response.data.$values || !Array.isArray(response.data.$values)) {
      //   throw new Error("Invalid API response format");
      // }
      // const mappedCourses = response.data.$values
      //   .filter((course) => !course.isComplete) // Filter for courses where IsCompleted is false
      //   .map((course) => ({
      //     ...course,
      //     courseId: Number(course.courseId), // Ensure 'courseId' is a number
      //     days: Array.isArray(course.days?.$values) ? course.days.$values : [], // Extract 'days' as an array
      //   }));

      console.log("Mapped Courses:", response.data); // Debug: Log the mapped courses

      return response.data;
    } catch (error) {
      console.error("Error fetching teacher courses:", error);
      throw error;
    }
  }
);

export const enrollCourse = createAsyncThunk(
  "courses/enrollCourse",
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await baseUrl.post(
        `/Students/enroll/${courseId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Error response:", error.response.data);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Error request:", error.request);
        return rejectWithValue("No response received from server");
      } else {
        // Something else happened
        console.error("Error message:", error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);
