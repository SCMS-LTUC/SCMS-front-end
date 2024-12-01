import { useSelector, useDispatch } from "react-redux";
import {
  fetchCourseLectures,
  submitAttendance,
  fetchAttendanceSummary,
} from "../../Api/Teacher/LectureApi";
import { useEffect } from "react";

export const useLectures = (courseId) => {
  const dispatch = useDispatch();
  const { lectures, status, error } = useSelector((state) => state.lectures);

  useEffect(() => {
    dispatch(fetchCourseLectures(courseId));
  }, [dispatch, courseId]);

  return { lectures, status, error };
};

export const useSubmitAttendance = () => {
  const dispatch = useDispatch();
  return (attendanceData) => {
    dispatch(submitAttendance(attendanceData));
  };
};

export const useAttendanceSummary = (courseId) => {
  const dispatch = useDispatch();
  const { attendanceSummary, status, error } = useSelector(
    (state) => state.lectures
  );

  useEffect(() => {
    dispatch(fetchAttendanceSummary(courseId));
  }, [dispatch, courseId]);

  return { attendanceSummary, status, error };
};
