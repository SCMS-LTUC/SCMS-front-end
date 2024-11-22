import { useSelector, useDispatch } from "react-redux";
import { fetchQuizzes, createQuiz, deleteQuiz } from "../../Api/Teacher/QuizApi";
import { useEffect } from "react";

export const useQuizzes = () => {
  const dispatch = useDispatch();
  const { quizzes, status, error } = useSelector((state) => state.quizzes);

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  return { quizzes, status, error };
};

export const useCreateQuiz = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.quizzes);
    
    const addQuiz = async (quiz) => {
        dispatch(createQuiz(quiz));
    };
    
    return { addQuiz, status, error };
}

export const useDeleteQuiz = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.quizzes);
    
    const removeQuiz = async (quizId) => {
        dispatch(deleteQuiz(quizId));
    };
    
    return { removeQuiz, status, error };
}