import { useSelector, useDispatch } from "react-redux";
import { getAssignments, submitAssignment, getAssignment, getAssignmentSubmission } from "../../Api/Student/AssignmentApi";
import { useEffect } from "react";

export const useAssignments = (courseId) => {
    const dispatch = useDispatch();
    const { assignments, status, error } = useSelector((state) => state.studentAssignments);

    useEffect(() => {
        if (courseId) {
            dispatch(getAssignments(courseId));
        }
    }, [dispatch, courseId]);

    return { assignments, status, error };
}

export const useAssignment = (assignmentId) => {
    const dispatch = useDispatch();
    const { assignment, status, error } = useSelector((state) => state.studentAssignments);

    useEffect(() => {
        if (assignmentId) {
            dispatch(getAssignment(assignmentId));
        }
    }, [dispatch, assignmentId]);

    return { assignment, status, error };
}

export const useSubmitAssignment = () => {
    const dispatch = useDispatch();

    const submit = (assignmentId, submission, file) => {
        dispatch(submitAssignment({ assignmentId, submission, file }));
    }

    return { submit };
}

export const useAssignmentSubmission = (studentAssignmentId) => {
    const dispatch = useDispatch();
    const { studentAssignment, status, error } = useSelector((state) => state.studentAssignments);

    useEffect(() => {
        if (studentAssignmentId) {
            dispatch(getAssignmentSubmission(studentAssignmentId));
        }
    }, [dispatch, studentAssignmentId]);

    return { studentAssignment, status, error };
}
