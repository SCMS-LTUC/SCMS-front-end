import { useSelector, useDispatch } from "react-redux";
import { fetchAssignments, createAssignment, fetchAssignment } from "../../Api/Teacher/AssignmentApi";
import { useEffect } from "react";

export const useAssignments = (courseId) => {
  const dispatch = useDispatch();
  const { assignments, status, error } = useSelector((state) => state.assignments);

  useEffect(() => {
    if (courseId) {
      dispatch(fetchAssignments(courseId));
    }
  }, [dispatch, courseId]);

  const addAssignment = (assignment) => {
    dispatch(createAssignment({ assignment }));
  };

  return { assignments, status, error, addAssignment };
};

export const useAssignment = (assignmentId) => {
  const dispatch = useDispatch();
  const { assignment, status, error } = useSelector((state) => state.assignments);

  useEffect(() => {
    if (assignmentId) {
      dispatch(fetchAssignment(assignmentId));
    }
  }, [dispatch, assignmentId]);

  return { assignment, status, error };
};