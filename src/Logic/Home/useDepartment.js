import { useSelector, useDispatch } from "react-redux";
import { getDepartments } from "../../Api/Home/DepartmentsApi";
import { useEffect } from "react";

export const useDepartments = () => {
    const dispatch = useDispatch();
    const { departments, status, error, loading } = useSelector(
        (state) => state.departments
    );
    
    useEffect(() => {
        if (departments.length === 0) dispatch(getDepartments());
    }, [dispatch, departments.length]);
    
    return { departments, status, error, loading };
}