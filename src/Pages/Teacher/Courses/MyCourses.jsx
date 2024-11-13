import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InfoCard from '../../../Components/Teacher/Courses/CourseCard.jsx';

const MyCourses = () => {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();

    const handleTabChange = (event, newValue) => setActiveTab(newValue);

    const navigateToCourse = (path) => navigate(path);

    const progressCourses = [
        {
            courseName: "Introduction to Web Development",
            teacher: "Dr. Ahmad Samhan",
            progress: 70,
            date: "October 29, 2024",
            classroom: "Room 101",
        },
        {
            courseName: "Advanced React",
            teacher: "Dr. Omar Zain",
            progress: 85,
            date: "November 3, 2024",
            classroom: "Room 202",
        },
    ];

    const doneCourses = [
        {
            courseName: "Basic JavaScript",
            teacher: "Dr. Ali Ahmad",
            progress: 100,
            date: "October 10, 2024",
            classroom: "Room 303",
        },
        {
            courseName: "HTML & CSS Fundamentals",
            teacher: "Dr. Majdi Mohammad",
            progress: 100,
            date: "October 15, 2024",
            classroom: "Room 404",
        },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-primary">My Courses</h1>

            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                textColor="primary"
                indicatorColor="primary"
                className="mb-6"
            >
                <Tab label="Progress Courses" />
                <Tab label="Done Courses" />
            </Tabs>

            {/* Render InfoCards for Progress Courses */}
            {activeTab === 0 && (
                <Box>
                    {progressCourses.map((course, index) => (
                        <InfoCard
                            key={index}
                            courseName={course.courseName}
                            teacher={course.teacher}
                            progress={course.progress}
                            date={course.date}
                            classroom={course.classroom}
                            onNavigate={() => navigateToCourse(`/courses/${course.courseName.toLowerCase().replace(/ /g, '-')}`)}
                        />
                    ))}
                </Box>
            )}

            {/* Render InfoCards for Done Courses */}
            {activeTab === 1 && (
                <Box>
                    {doneCourses.map((course, index) => (
                        <InfoCard
                            key={index}
                            courseName={course.courseName}
                            teacher={course.teacher}
                            progress={course.progress}
                            date={course.date}
                            classroom={course.classroom}
                            onNavigate={() => navigateToCourse(`/courses/${course.courseName.toLowerCase().replace(/ /g, '-')}`)}
                            onDownload={() => alert(`Downloading certificate for ${course.courseName}`)} // Directly handle download here
                        />
                    ))}
                </Box>
            )}
        </div>
    );
};

export default MyCourses;
