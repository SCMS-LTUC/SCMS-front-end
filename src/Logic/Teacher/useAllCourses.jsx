import { useSelector, useDispatch } from "react-redux";
import {
  fetchTeacherCourses,
  fetchTeacherCourse,
} from "../../Api/Teacher/CourseApi";
import { useEffect } from "react";

export const useAllCourses = () => {
  const dispatch = useDispatch();
  const { teacherCourses, status, error, loading } = useSelector(
    (state) => state.courses
  );

  useEffect(() => {
    if (teacherCourses.length === 0) dispatch(fetchTeacherCourses());
  }, [dispatch, teacherCourses.length]);

  return { teacherCourses, status, error, loading };
};

export const useCourse = (courseId) => {
  const dispatch = useDispatch();
  const { currentCourses, status, error, loading } = useSelector(
    (state) => state.courses
  );

  useEffect(() => {
    console.log("this is the course id", courseId);

    if (courseId) dispatch(fetchTeacherCourse({ courseId }));
  }, [dispatch, courseId]);
  const course = currentCourses;
  return { course, status, error, loading };
};
