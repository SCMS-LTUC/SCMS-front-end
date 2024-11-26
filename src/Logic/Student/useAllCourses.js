import { useSelector, useDispatch } from "react-redux";
import {
  fetchStudentCurrentCourses,
  fetchStudentPreviousCourses,
  fetchStudentCourse,
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