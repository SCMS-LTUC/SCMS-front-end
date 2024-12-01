import { useSelector, useDispatch } from "react-redux";
import {
  fetchAssignmentSubmissions,
  fetchAssignmentSubmission,
  gradeSubmission,
  gradeSubmissionNotSubmitted,
} from "../../Api/Teacher/AssignmentApi";
import { useEffect } from "react";

export const useAssignmentSubmissions = (assignmentId) => {
  const dispatch = useDispatch();
  const { submissions, status, error } = useSelector(
    (state) => state.assignmentSubmissions
  );

  useEffect(() => {
    if (assignmentId) {
      dispatch(fetchAssignmentSubmissions(assignmentId));
    }
  }, [dispatch, assignmentId]);

  return { submissions, status, error };
};

export const useAssignmentSubmission = (studentAssignmentId) => {
  const dispatch = useDispatch();
  const { submission, status, error } = useSelector(
    (state) => state.assignmentSubmissions
  );

  useEffect(() => {
    // if (studentAssignmentId) {
    //   dispatch(fetchAssignmentSubmission(studentAssignmentId));
    // }
    dispatch(fetchAssignmentSubmission(studentAssignmentId));
  }, [dispatch, studentAssignmentId]);

  return { submission, status, error };
};

export const useGradeSubmission = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.assignmentSubmissions);

  const gradesubmit = (studentAssignmentId, grade, feedback) => {
    dispatch(gradeSubmission(studentAssignmentId, grade, feedback));
  };

  return { gradesubmit, status, error };
};

export const useGradeSubmissionNotSubmitted = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.assignmentSubmissions);

  const gradeNotSubmitted = (assignmentId, studentId, grade, feedback) => {
    console.log(assignmentId, studentId, grade, feedback);
    dispatch(
      gradeSubmissionNotSubmitted({ assignmentId, studentId, grade, feedback })
    );
  };

  return { gradeNotSubmitted, status, error };
};
