import { useParams } from "react-router-dom";
// import { useState } from "react";
import { Typography, Divider, Button, Chip } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const formatDate = (dateString) => {
  if (!dateString) return { date: "N/A", time: "N/A" };

  const date = new Date(dateString);
  const toDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const toTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return { date: toDate, time: toTime };
};

export default function AssignmentLayout({ children, dueDate, title }) {
  // const navigate = useNavigate();
  const { courseId } = useParams();
  console.log(courseId);

  return (
    <div className="flex flex-col justify-between  ">
      <div>
        <Button
          LinkComponent={Link}
          to={`/course-details/${courseId}/assignments/`}
          // onClick={() => navigate(`/course-details/:courseName/quizzes/`)}
          className="!text-secondary !text-base  hover:!bg-secondary-lighter hover:!text-neutral-surface !transition-all !duration-300 !rounded-full"
          variant="text"
          startIcon={<ArrowBackOutlinedIcon />}
        >
          Back to Assignments
        </Button>
      </div>

      <div className="container space-y-6 !mx-auto !p-8">
        <div className=" justify-between">
          <Typography className="!font-bold !text-2xl !text-neutral-textPrimary !mb-4">
            {title}
          </Typography>
          <div className="space-x-2 !mb-3">
            <Chip
              icon={
                <CalendarTodayOutlinedIcon className=" !text-neutral-textSecondary" />
              }
              label={"Due: " + formatDate(dueDate).date}
              className="!bg-white !text-base !text-neutral-textSecondary"
            />
            <Chip
              icon={<AccessTimeIcon className=" !text-neutral-textSecondary" />}
              label={formatDate(dueDate).time}
              className="!bg-white !text-base !text-neutral-textSecondary"
            />
          </div>
          <Divider className="!mb-4" />
        </div>
        {children}
      </div>
    </div>
  );
}
AssignmentLayout.propTypes = {
  children: PropTypes.node.isRequired,
  dueDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
