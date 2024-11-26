import { useSelector, useDispatch } from "react-redux";
import { 
    fetchQuizzes,
    fetchQuiz,
    submitQuiz,
    calculateScore
 } from "../../Api/Student/QuizApi";
import { useEffect } from "react";

export const useQuizzes = (courseId) => {
    const dispatch = useDispatch();
    const { quizzes, status, error } = useSelector((state) => state.studentQuizzes);

    useEffect(() => {
        if (courseId) {
            dispatch(fetchQuizzes(courseId));
        }
    }, [dispatch, courseId]);

    return { quizzes, status, error };
};

export const useQuiz = (quizId) => {
    const dispatch = useDispatch();
    const { quiz, status, error } = useSelector((state) => state.studentQuizzes);

    useEffect(() => {
        if (quizId) {
            dispatch(fetchQuiz(quizId));
        }
    }, [dispatch, quizId]);
    console.log("quiz", quiz);
    console.log("status", status);

    return { quiz, status, error };
}

export const useSubmitQuiz = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.studentQuizzes);

    const submit = (quizresult) => {
        dispatch(submitQuiz(quizresult));
    };

    return { submit, status, error };
}

export const useCalculateScore = () => {
    const dispatch = useDispatch();
    const { quizResult, status, error } = useSelector((state) => state.studentQuizzes);

    const calculate = (quizId) => {
        dispatch(calculateScore(quizId));
    };

    return { quizResult, status, error, calculate };
}