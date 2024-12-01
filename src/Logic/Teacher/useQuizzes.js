import { useSelector, useDispatch } from "react-redux";
import {
  fetchQuizzes,
  createQuiz,
  deleteQuiz,
  fetchQuizSubmissions,
} from "../../Api/Teacher/QuizApi";
import { useEffect } from "react";

export const useQuizzes = () => {
  const dispatch = useDispatch();
  const { quizzes, status, error } = useSelector((state) => state.quizzes);

  useEffect(() => {
    if (quizzes.length === 0) dispatch(fetchQuizzes());
  }, [dispatch, quizzes]);

  return { quizzes, status, error };
};

export const useCreateQuiz = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.quizzes);

  const addQuiz = async (quiz) => {
    dispatch(createQuiz(quiz));
  };

  return { addQuiz, status, error };
};

export const useDeleteQuiz = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.quizzes);

  const removeQuiz = async (quizId) => {
    // console.log("this is the quiz id from remove quiz", quizId);
    dispatch(deleteQuiz(quizId));
  };

  return { removeQuiz, status, error };
};

export const useQuizSubmissions = (quizId) => {
  const dispatch = useDispatch();
  const { submissions, status, error } = useSelector((state) => state.quizzes);

  useEffect(() => {
    if (quizId && (!submissions || submissions.quizId !== quizId))
      dispatch(fetchQuizSubmissions(quizId));
  }, [dispatch, quizId]);

  return { submissions, status, error };
};
