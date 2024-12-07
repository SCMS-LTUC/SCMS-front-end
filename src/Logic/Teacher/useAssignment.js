import { useSelector, useDispatch } from "react-redux";
import {
  fetchAssignments,
  createAssignment,
  fetchAssignment,
  updateAssignment,
  deleteAssignment,
} from "../../Api/Teacher/AssignmentApi";
import { useEffect } from "react";

export const useAssignments = (courseId) => {
  const dispatch = useDispatch();
  const { assignments, status, error } = useSelector(
    (state) => state.assignments
  );

  useEffect(() => {
    if (courseId) {
      if (courseId && (!assignments || assignments.courseId !== courseId))
        dispatch(fetchAssignments(courseId));
    }
  }, [dispatch, courseId, assignments]);

  const addAssignment = (assignment) => {
    dispatch(createAssignment({ assignment }));
  };

  return { assignments, status, error, addAssignment };
};

export const useAssignment = (assignmentId) => {
  const dispatch = useDispatch();
  const { assignment, status, error } = useSelector(
    (state) => state.assignments
  );

  useEffect(() => {
    if (assignmentId && (!assignment || assignment.id !== assignmentId)) {
      dispatch(fetchAssignment(assignmentId));
    }
  }, [dispatch, assignmentId]);

  return { assignment, status, error };
};

export const useUpdateAssignment = () => {
  const dispatch = useDispatch();
  const editAssignment = (assignmentId, assignment) => {
    if (assignmentId && assignment) {
      dispatch(updateAssignment({ assignmentId, assignment }));
    } else {
      console.error("Invalid assignment data or ID provided for update.");
    }
  };

  return { editAssignment };
};

export const useDeleteAssignment = () => {
  const dispatch = useDispatch();
  const removeAssignment = (assignmentId) => {
    dispatch(deleteAssignment(assignmentId));
  };

  return { removeAssignment };
};
