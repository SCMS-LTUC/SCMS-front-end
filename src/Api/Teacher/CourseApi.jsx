import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../BaseUrl";

export const fetchTeacherCourses = createAsyncThunk(
  "courses/fetchTeacherCourses",
  async () => {
    try {
      const response = await baseUrl.get("/Courses/Teacher/l/AllCourses", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      // Ensure response.data.$values is an array
      if (!response.data.$values || !Array.isArray(response.data.$values)) {
        throw new Error("Invalid API response format");
      }
      const mappedCourses = response.data.$values
        .filter((course) => !course.isComplete)
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

export const fetchTeacherCourse = createAsyncThunk(
  "courses/fetchTeacherCourse",
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
