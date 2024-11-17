import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../Api/BaseUrl";

export const fetchStudentAnnouncements = createAsyncThunk(
    "studentAnnouncements/fetchStudentAnnouncements",
    async () => {
        try {
        const response = await axios.get("/Announcement/Students", {
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
        console.error("Error fetching student announcements:", error);
        throw error;
    }
    }
);

const studentAnnouncementsSlice = createSlice({
    name: "studentAnnouncements",
    initialState: {
        studentAnnouncements: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchStudentAnnouncements.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchStudentAnnouncements.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.teacherAnnouncements = action.payload;
        })
        .addCase(fetchStudentAnnouncements.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    },
});

export default studentAnnouncementsSlice.reducer;