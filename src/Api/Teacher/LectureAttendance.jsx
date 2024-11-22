// import { createAsyncThunk } from "@reduxjs/toolkit";
// import baseUrl from "../BaseUrl";

// const fetchCourseLectureAttendance = createAsyncThunk(
//     "Attendance/fetchCourseLectureAttendance",
//     async (courseId) => {
//         try {
//         const response = await baseUrl.get(`/LectureAttendance/${courseId}`, {
//             headers: {
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//             },
//         });
    
//         const lectureAttendance = response.data;
//         const mappedLectureAttendance = {
//             ...lectureAttendance,
//             lectureId: Number(lectureAttendance.lectureId), // Ensure 'lectureId' is a number
//             courseId: Number(lectureAttendance.courseId), // Ensure 'courseId' is a number
//             students: Array.isArray(lectureAttendance.students?.$values) ? lectureAttendance.students.$values : [], // Extract 'students' as an array
//         };
    
//         console.log("Mapped Lecture Attendance:", mappedLectureAttendance); // Debug: Log the mapped lecture attendance
    
//         return mappedLectureAttendance;
//         } catch (error) {
//         console.error("Error fetching course lecture attendance:", error);
//         throw error;
//         }
//     }
// );