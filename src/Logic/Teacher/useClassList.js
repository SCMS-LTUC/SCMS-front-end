import { useSelector, useDispatch } from "react-redux";
import { fetchClassList } from "../../Api/Teacher/ClassListApi";
import { useEffect } from "react";

export const useClassList = (courseId) => {
  const dispatch = useDispatch();
  const { students, status, error } = useSelector((state) => state.classList);

  useEffect(() => {
    if (courseId){
        dispatch(fetchClassList(courseId));
    } 
  }, [dispatch, courseId]);

  return { students, status, error };
};