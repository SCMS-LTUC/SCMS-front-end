import { useSelector, useDispatch } from "react-redux";
import { fetchCourseAnnouncements, fetchStudentAnnouncements } from "../../Api/Student/AnnouncementsApi";
import { useEffect } from "react";

export const useCourseAnnouncements = (courseId) => {
    const dispatch = useDispatch();
    const { courseAnnouncements, status, error, loading } = useSelector(
        (state) => state.studentAnnouncements
    );
    
    useEffect(() => {
        if (courseAnnouncements.length === 0)
        dispatch(fetchCourseAnnouncements(courseId));
    }, [dispatch, courseAnnouncements.length, courseId]);
    
    return { courseAnnouncements, status, error, loading };
}

export const useStudentAnnouncements = () => {
    const dispatch = useDispatch();
    const { announcements, status, error, loading } = useSelector(
        (state) => state.studentAnnouncements
    );
    
    useEffect(() => {
        if (announcements.length === 0) dispatch(fetchStudentAnnouncements());
    }, [dispatch, announcements.length]);
    
    return { announcements, status, error, loading };
}