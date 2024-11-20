import { useSelector, useDispatch } from "react-redux";
import { fetchCourseAnnouncements, createAnnouncement, editAnnouncement, deleteAnnouncement } from "../../Api/Teacher/AnnouncementsApi";
import { useEffect } from "react";

export const useAnnouncements = (courseId) => {
    const dispatch = useDispatch();
    const { announcements, status, error } = useSelector((state) => state.announcements);
    
    useEffect(() => {
        if (courseId) {
        dispatch(fetchCourseAnnouncements(courseId));
        }
    }, [dispatch, courseId]);

    const addAnnouncement = (announcement) => {
        dispatch(createAnnouncement({ courseId, announcement }));
    }

    const updateAnnouncement = (announcementId, announcement) => {
        dispatch(editAnnouncement({ courseId, announcementId, announcement }));
    };
    
    const removeAnnouncement = (announcementId) => {
        dispatch(deleteAnnouncement({ courseId, announcementId }));
    };
    
    return { announcements, status, error, addAnnouncement, updateAnnouncement, removeAnnouncement };
}