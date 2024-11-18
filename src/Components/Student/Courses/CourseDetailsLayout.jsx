import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
// import { useCourse } from "../../Logic/Teacher/useAllCourses";

const CourseDetailsLayout = ({ course }) => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // data fetching
  // const { course, status, error, loading } = useCourse(courseId);
  console.log("this is the teacher course", course);
  console.log("this is the status", status);

  const tabs = [
    {
      key: "announcements",
      text: "Announcements",
      icon: <NotificationsNoneOutlinedIcon />,
      path: `/course-details/${courseId}/announcements`,
    },
    {
      key: "classList",
      text: "Class List",
      icon: <PeopleAltOutlinedIcon />,
      path: `/course-details/${courseId}/classlist`,
    },
    {
      key: "assignments",
      text: "Assignments",
      icon: <AssignmentOutlinedIcon />,
      path: `/course-details/${courseId}/assignments`,
    },
    {
      key: "quizzes",
      text: "Quizzes",
      icon: <QuizOutlinedIcon />,
      path: `/course-details/${courseId}/quizzes`,
    },
    {
      key: "grades",
      text: "Grades",
      icon: <SchoolOutlinedIcon />,
      path: `/course-details/${courseId}/grades`,
    },
    {
      key: "attendance",
      text: "Attendance",
      icon: <CalendarTodayOutlinedIcon />,
      path: `/course-details/${courseId}/attendance/`,
    },
  ];
  const [value, setValue] = useState(getInitialTab());

  function getInitialTab() {
    const currentPath = location.pathname;
    const currentTab = tabs.find((tab) => currentPath.includes(tab.path));
    return currentTab ? currentTab.key : tabs[0].key;
  }
  useEffect(() => {
    setValue(getInitialTab());
  }, [location.pathname]);

  useEffect(() => {
    if (!courseId) {
      navigate("/");
      return;
    }
  }, [courseId, navigate]);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (status === "failed") {
  //   if (error === "Request failed with status code 401") {
  //     navigate("/login");
  //   }
  //   return <div>{error}</div>;
  // }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const selectedTab = tabs.find((tab) => tab.key === newValue);
    if (selectedTab) navigate(selectedTab.path);
  };

  return (
    <div className="">
      {/* {loading && <div>Loading...</div>} */}
      <Card className="p-6 !h-auto container !mx-auto !w-full !bg-neutral-surface !rounded-lg !shadow-md !shadow-neutral-border !border-2 !border-neutral-border ">
        <CardContent className=" !border-b-2 !border-neutral-border">
          <Typography className="!font-bold mb-2 text-neutral-textPrimary !text-4xl">
            {/*course.className ||*/ "Course Name"}
          </Typography>
          <Typography className="text-neutral-textSecondary !text-base">
            Instructor: {/*course.teacherName ||*/ "Unknown Teacher"}
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
  courseName: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired,
};

export default CourseDetailsLayout;
