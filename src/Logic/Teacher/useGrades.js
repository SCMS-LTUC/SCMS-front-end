import { useSelector, useDispatch } from "react-redux";
import { fetchCourseGrades, submitGrades } from "../../Api/Teacher/GradesApi";
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

export const useSubmitGrades = (courseId) => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.teacherGrades);
    
    const handleSubmitGrades = () => {
        dispatch(submitGrades({ courseId }));
    };
    
    return { status, error, handleSubmitGrades };
}