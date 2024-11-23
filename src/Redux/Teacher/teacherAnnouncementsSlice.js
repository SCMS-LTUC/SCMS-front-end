import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../../Api/BaseUrl";

export const fetchTeacherAnnouncements = createAsyncThunk(
    "teacherAnnouncements/fetchTeacherAnnouncements",
    async () => {
        try {
        const response = await BaseUrl.get("/Announcement/Teachers", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            }
        );
        // Ensure response.data.$values is an array
        if (!response.data.$values || !Array.isArray(response.data.$values)) {
            throw new Error("Invalid API response format");
        }
        const mappedAnnouncements = response.data.$values.map(announcement => ({
            ...announcement,
            announcementId: Number(announcement.announcementId), // Ensure 'announcementId' is a number
        }));
        return mappedAnnouncements;
    } catch (error) {
        console.error("Error fetching teacher announcements:", error);
        throw error;
    }
    }
);

const teacherAnnouncementsSlice = createSlice({
    name: "teacherAnnouncements",
    initialState: {
        teacherAnnouncements: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTeacherAnnouncements.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchTeacherAnnouncements.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.teacherAnnouncements = action.payload;
        })
        .addCase(fetchTeacherAnnouncements.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    },
});

export default teacherAnnouncementsSlice.reducer;