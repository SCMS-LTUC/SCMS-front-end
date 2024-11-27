import { useSelector, useDispatch } from "react-redux";
import { fetchCourseGrades } from "../../Api/Teacher/GradesApi";
import { useEffect } from "react";

export const useGrades = (courseId) => {
    console.log("useGrades courseId", courseId);
    const dispatch = useDispatch();
    const { grades, status, error } = useSelector((state) => state.teacherGrades);
    
    useEffect(() => {
        dispatch(fetchCourseGrades(courseId));
    }, [dispatch, courseId]);
    
    return { grades, status, error };
}