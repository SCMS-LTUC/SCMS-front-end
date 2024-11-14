import { useEffect, useState } from "react";
import { Tabs, Tab, Typography /*IconButton*/ } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
const CourseDetailsLayout = ({ courseName, teacher }) => {
  const navigate = useNavigate();
  const Location = useLocation();
  const tabs = [
    {
      key: "announcements",
      text: "Announcements",
      icon: <NotificationsNoneOutlinedIcon />,
      path: "/course-details/:courseName/announcements",
    },
    {
      key: "classList",
      text: "Class List",
      icon: <PeopleAltOutlinedIcon />,
      path: "/course-details/:courseName/class-list",
    },
    {
      key: "assignments",
      text: "Assignments",
      icon: <AssignmentOutlinedIcon />,
      path: "/course-details/:courseName/assignments",
    },
    {
      key: "quizzes",
      text: "Quizzes",
      icon: <QuizOutlinedIcon />,
      path: "/course-details/:courseName/quizzes",
    },
    {
      key: "grades",
      text: "Grades",
      icon: <SchoolOutlinedIcon />,
      path: "/course-details/:courseName/grades",
    },
    {
      key: "attendance",
      text: "Attendance",
      icon: <CalendarTodayOutlinedIcon />,
      path: "/course-details/:courseName/attendance/",
    },
  ];
  function getInitialTab() {
    const currentPath = Location.pathname;
    const currentTab = tabs.find((tab) => currentPath.includes(tab.path));
    return currentTab ? currentTab.key : tabs[0].key;
  }
  const [value, setValue] = useState(getInitialTab());

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const selectedTab = tabs.find((tab) => tab.key === newValue);
    if (selectedTab) navigate(selectedTab.path);
  };

  useEffect(() => {
    setValue(getInitialTab());
  }, [Location.pathname]);

  return (
    <div className="">
      <Card className="p-6 !h-auto container !mx-auto !w-full !bg-neutral-surface !rounded-xl !shadow-md !shadow-neutral-border !border-2 !border-neutral-border ">
        <CardContent className=" !border-b-2 !border-neutral-border">
          <Typography className="!font-bold mb-2 text-neutral-textPrimary !text-4xl">
            {courseName || "Web Development"}
          </Typography>
          <Typography className="text-neutral-textSecondary !text-base">
            Instructor: {teacher || "Dr. Ahmad Samhan"}
          </Typography>
        </CardContent>

        <CardContent className="!border-b-2 !border-neutral-border ">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            className="!flex !justify-between"
          >
            {tabs.map((tab) => (
              <Tab
                value={tab.key}
                key={tab.key}
                label={tab.text}
                icon={tab.icon}
                className="flex-1 flex justify-between"
              ></Tab>
            ))}
          </Tabs>
        </CardContent>
        <CardContent>
          <div className="!p-6">
            <Outlet />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

CourseDetailsLayout.propTypes = {
  courseName: PropTypes.string.isRequired, // courseName must be a required string
  teacher: PropTypes.string.isRequired, // teacher must be a required string
};

export default CourseDetailsLayout;
