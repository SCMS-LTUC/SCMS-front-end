import { useSelector, useDispatch } from "react-redux";
import {
  fetchQuizzes,
  fetchQuiz,
  submitQuiz,
  calculateScore,
  fetchQuizResult,
} from "../../Api/Student/QuizApi";
import { useEffect } from "react";

export const useQuizzes = (courseId) => {
  const dispatch = useDispatch();
  const { quizzes, status, error } = useSelector(
    (state) => state.studentQuizzes
  );

  useEffect(() => {
    if (courseId && quizzes.length === 0) {
      dispatch(fetchQuizzes(courseId));
    }
  }, [dispatch, courseId]);

  return { quizzes, status, error };
};

export const useQuiz = (quizId) => {
  const dispatch = useDispatch();
  const { quiz, status, error } = useSelector((state) => state.studentQuizzes);

  useEffect(() => {
    if (quizId && quiz?.id !== quizId) {
      dispatch(fetchQuiz(quizId));
    }
  }, [dispatch, quizId]);
  console.log("quiz", quiz);
  console.log("status", status);

  return { quiz, status, error };
};

export const useSubmitQuiz = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.studentQuizzes);

  const submit = (quizresult) => {
    dispatch(submitQuiz(quizresult));
  };

  return { submit, status, error };
};

export const useCalculateScore = () => {
  const dispatch = useDispatch();
  const { quizResult, status, error } = useSelector(
    (state) => state.studentQuizzes
  );

  const calculate = (quizId) => {
    dispatch(calculateScore(quizId));
  };

  return { quizResult, status, error, calculate };
};

export const useQuizResult = (quizId) => {
  const dispatch = useDispatch();
  const { quizResult, status, error } = useSelector(
    (state) => state.studentQuizzes
  );

  useEffect(() => {
    console.log("this is the quiz result ");
    if (quizId && (!quizResult || quizResult.quizId !== quizId)) {
      console.log("this is the if inside the quiz result ");
      dispatch(fetchQuizResult(quizId));
    }
  }, [dispatch, quizId, quizResult]);
  console.log("use effect in quiz result", quizResult);

  return { quizResult, status, error };
};
