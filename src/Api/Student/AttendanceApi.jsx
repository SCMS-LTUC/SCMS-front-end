import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCourseLectures = createAsyncThunk(
  "studentAttendance/getCourseLectures",
  async (courseId) => {
    try {
      const response = await axios.get(
        `http://localhost:5128/lectures/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("this is the course lectures", response.data);

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
      const response = await axios.get(
        `http://localhost:5128/Student/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("this is the absence dates", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
