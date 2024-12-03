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
    dispatch(getStudentAbsenceDates(courseId));
  }, [dispatch, courseId]);

  return { studentAbsenceDates, status, error };
};

export const useCourseLectures = (courseId) => {
  const dispatch = useDispatch();
  const { courseLectures, status, error } = useSelector(
    (state) => state.studentAttendance
  );
  //   dispatch(getCourseLectures(courseId));

  useEffect(() => {
    if (courseId) {
      dispatch(getCourseLectures(courseId));
    }
  }, [dispatch, courseId]);

  return { courseLectures, status, error };
};
