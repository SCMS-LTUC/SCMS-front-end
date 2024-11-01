import { useState } from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";
const CourseDetailsLayout = ({ courseName, teacher }) => {
  const [activeTab, setActiveTab] = useState(0);
  // const navigate = useNavigate();

  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  return (
    <div className="p-6">
      <Card className="container !mx-auto !w-full !bg-neutral-surface !rounded-xl !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !mb-10">
        <CardContent className="!bg-neutral-background !border-b-2 !border-neutral-border">
          {/* <h1 className="font-bold pl-4 text-xl text-neutral-textPrimary">
            Absence Summary
          </h1> */}

          <Typography variant="h4" className="font-bold mb-2 text-primary">
            {courseName || "Web Development"}
          </Typography>
          <Typography variant="subtitle1" className="text-secondary mb-4">
            Instructor: {teacher || "Dr. Ahmad Samhan"}
          </Typography>
        </CardContent>

        <CardContent className="">
          <div className="flex justify-start !border-2 !border-neutral-border rounded-xl">
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
          </div>
        </CardContent>
      </Card>

      {/* Tab Panels */}
      <Box className="mt-4">
        {/* Note: Here you can replace the Typography with the componenet that you will build it like Announcements or Attendance etc ..  */}
        {activeTab === 0 && (
          <Typography>Class List content goes here.</Typography>
        )}
        {activeTab === 1 && <Typography>Content section goes here.</Typography>}
        {activeTab === 2 && (
          <Typography>Announcements section goes here.</Typography>
        )}
        {activeTab === 3 && (
          <Typography>Attendance section goes here.</Typography>
        )}
        {activeTab === 4 && <Typography>Quizzes section goes here.</Typography>}
        {activeTab === 5 && (
          <Typography>Assignments section goes here.</Typography>
        )}
        {activeTab === 6 && <Typography>Grades section goes here.</Typography>}
      </Box>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

CourseDetailsLayout.propTypes = {
  courseName: PropTypes.string.isRequired, // courseName must be a required string
  teacher: PropTypes.string.isRequired, // teacher must be a required string
};

export default CourseDetailsLayout;
