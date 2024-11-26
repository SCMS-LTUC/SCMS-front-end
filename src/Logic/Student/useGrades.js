import { useSelector, useDispatch } from "react-redux";
import { 
    getStudentGrades
 } from "../../Api/Student/GradesApi";
import { useEffect } from "react";

export const useGrades = (courseId) => {
    const dispatch = useDispatch();
    const { studentGrades, status, error } = useSelector((state) => state.studentGrades);

    useEffect(() => {
        if (courseId) {
            dispatch(getStudentGrades(courseId));
        }
    }, [dispatch, courseId]);

    return { studentGrades, status, error };
}