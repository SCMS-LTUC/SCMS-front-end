import { useState } from 'react';
import { Tabs, Tab, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CourseDetailsLayout = ({ courseName, teacher }) => {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();

    const handleTabChange = (event, newValue) => setActiveTab(newValue);

    return (
        <div className="p-6">
            {/* Back to Courses Button */}
            <Button onClick={() => navigate('/')} className="mb-4" variant="text" color="primary">
                &larr; Back to My Courses
            </Button>
            <Typography variant="h4" className="font-bold mb-2 text-primary">
                {courseName || "Web Development"}
            </Typography>
            <Typography variant="subtitle1" className="text-secondary mb-4">
                Instructor: {teacher || "Dr. Ahmad Samhan"}
            </Typography>

            {/* Navigation Tabs */}
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                textColor="primary"
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons="auto"
            >
                <Tab label="Class List" />
                <Tab label="Content" />
                <Tab label="Announcements" />
                <Tab label="Attendance" />
                <Tab label="Quizzes" />
                <Tab label="Assignments" />
                <Tab label="Grades" />
            </Tabs>

            {/* Tab Panels */}
            <Box className="mt-4">
                {/* Note: Here you can replace the Typography with the componenet that you will build it like Announcements or Attendance etc ..  */}
                {activeTab === 0 && <Typography>Class List content goes here.</Typography>}
                {activeTab === 1 && <Typography>Content section goes here.</Typography>}
                {activeTab === 2 && <Typography>Announcements section goes here.</Typography>}
                {activeTab === 3 && <Typography>Attendance section goes here.</Typography>}
                {activeTab === 4 && <Typography>Quizzes section goes here.</Typography>}
                {activeTab === 5 && <Typography>Assignments section goes here.</Typography>}
                {activeTab === 6 && <Typography>Grades section goes here.</Typography>}
            </Box>
        </div>
    );
};

export default CourseDetailsLayout;
