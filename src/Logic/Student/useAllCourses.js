import { useSelector, useDispatch } from "react-redux";
import {
  fetchStudentCurrentCourses,
  fetchStudentPreviousCourses,
  fetchStudentCourse,
  fetchNotStartedCourses,
  enrollCourse,
} from "../../Api/Student/CoursesApi";
import { useEffect } from "react";

export const useCurrentStudentCourses = () => {
  const dispatch = useDispatch();
  const { currentCourses, status, error, loading } = useSelector(
    (state) => state.studentCourses
  );

  useEffect(() => {
    if (currentCourses.length === 0) dispatch(fetchStudentCurrentCourses());
  }, [dispatch, currentCourses.length]);

  return { currentCourses, status, error, loading };
};

export const usePreviousStudentCourses = () => {
  const dispatch = useDispatch();
  const { previousCourses, status, error, loading } = useSelector(
    (state) => state.studentCourses
  );

  useEffect(() => {
    if (previousCourses.length === 0) dispatch(fetchStudentPreviousCourses());
  }, [dispatch, previousCourses.length]);

  return { previousCourses, status, error, loading };
};

export const useCourse = (courseId) => {
  const dispatch = useDispatch();
  const { course, status, error, loading } = useSelector(
    (state) => state.studentCourses
  );

  useEffect(() => {
    console.log("this is the course id", courseId);

    if (courseId) dispatch(fetchStudentCourse({ courseId }));
  }, [dispatch, courseId]);
  return { course, status, error, loading };
};
export const useNotStartedCourses = () => {
  const dispatch = useDispatch();
  const { NotStartedCourses, status, error, loading } = useSelector(
    (state) => state.studentCourses
  );

  useEffect(() => {
    if (NotStartedCourses.length === 0 || status === "succeeded enroll") {
      dispatch(fetchNotStartedCourses());
    }
  }, [dispatch, NotStartedCourses.length, status]);

  return { NotStartedCourses, status, error, loading };
};

export const useEnroll = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.studentCourses);

  const enroll = (courseId) => {
    dispatch(enrollCourse(courseId));
  };
  const statusEnroll = status;
  const errorEnroll = error;
  return { enroll, statusEnroll, errorEnroll };
};
