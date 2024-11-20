import { useSelector, useDispatch } from "react-redux";
import { fetchAssignmentSubmissions, fetchAssignmentSubmission, gradeSubmission } from "../../Api/Teacher/AssignmentApi";
import { useEffect } from "react";

export const useAssignmentSubmissions = (assignmentId) => {
    const dispatch = useDispatch();
    const { submissions, status, error } = useSelector((state) => state.assignmentSubmissions);
  
    useEffect(() => {
      if (assignmentId) {
        dispatch(fetchAssignmentSubmissions(assignmentId));
      }
    }, [dispatch, assignmentId]);
  
    return { submissions, status, error };
};

export const useAssignmentSubmission = (studentAssignmentId) => {
    const dispatch = useDispatch();
    const { submission, status, error } = useSelector((state) => state.assignmentSubmissions);
  
    useEffect(() => {
      if (studentAssignmentId) {
        dispatch(fetchAssignmentSubmission(studentAssignmentId));
      }
    }, [dispatch, studentAssignmentId]);
  
    return { submission, status, error };
}

export const useGradeSubmission = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.assignmentSubmissions);
  
    const grade =  ( studentAssignmentId, grade, feedback ) => {
      dispatch(gradeSubmission({ studentAssignmentId, grade, feedback }));
    };
  
    return { grade, status, error };
}