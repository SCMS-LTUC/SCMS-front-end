import { useSelector, useDispatch } from "react-redux";
import {
  getCourseLectures,
  getStudentAbsenceDates,
} from "../../Api/Student/AttendanceApi";
import { useEffect } from "react";

export const useAttendance = (courseId) => {
  const dispatch = useDispatch();
  const { studentAbsenceDates, status, error } = useSelector(
    (state) => state.studentAttendance
  );

  useEffect(() => {
    if (courseId) {
      dispatch(getStudentAbsenceDates(courseId));
    }
  }, [dispatch, courseId]);
  console.log(
    "this is the absence dates from logic folder",
    studentAbsenceDates
  );

  return { studentAbsenceDates, status, error };
};

export const useCourseLectures = (courseId) => {
  const dispatch = useDispatch();
  const { courseLectures, status, error } = useSelector(
    (state) => state.studentAttendance
  );

  useEffect(() => {
    console.log("this iss the useEffect");
    if (courseId) {
      dispatch(getCourseLectures(courseId));
    }
  }, [dispatch, courseId]);
  console.log("this is the course lectures from logic folder", courseLectures);

  return { courseLectures, status, error };
};
