import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

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

export default function AnnouncementCard({ title, createdAt, type, content }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  //   const navigate = useNavigate();

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card
      className={` container !bg-neutral-surface !rounded-lg !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !p-4 !border-l-4 ${type === "Important" ? "!border-l-accent-error" : type === "Notice" ? "!border-l-accent-warning" : "!border-l-accent-info"} `}
    >
      <CardContent className=" !h-full !justify-between !pb-4">
        <div id="title" className="space-y-2">
          <Typography className="flex justify-between !text-neutral-textPrimary !font-bold !text-2xl">
            {title}
            <Chip
              label={type}
              className={`${type === "Important" ? "!bg-red-100 !text-red-700" : type === "Notice" ? "!bg-yellow-100 !text-yellow-700" : "!bg-blue-100 !text-blue-700"}  `}
            />
          </Typography>
          <Typography className="!text-neutral-textSecondary !text-sm">
            {showFullDescription ? content : `${content.substring(0, 300)}...`}
          </Typography>
          {content.length > 100 && (
            <Button
              onClick={toggleDescription}
              className="!text-primary !text-xs"
            >
              {showFullDescription ? "Less" : "More"}
            </Button>
          )}
        </div>
        <Divider className="!my-4 !w-full" />
        <div id="details" className="flex justify-start items-center">
          <Chip
            icon={
              <CalendarTodayIcon className="!text-neutral-textSecondary " />
            }
            label={`${formatDate ? formatDate(createdAt).date : "N/A"}`}
            className="!bg-neutral-surface !text-neutral-textSecondary !border !border-neutral-border !text-base"
          />
          <Chip
            icon={<AccessTimeIcon className="!text-neutral-textSecondary " />}
            label={`${formatDate ? formatDate(createdAt).time : "N/A"}`}
            className="!bg-neutral-surface !text-neutral-textSecondary !border !border-neutral-border !text-base"
          />
        </div>
        {/* <Divider className="!my-4" />
        <div className="flex justify-end items-center space-x-2">
          <Button
            variant="contained"
            color="primary"
            className="!text-neutral-surface"
            onClick={() =>
              navigate(
                "/course-details/:courseName/assignments/:assignmentId/submissions"
              )
            }
          >
            View Submissions
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="!text-primary !border-primary"
            onClick={() =>
              navigate(
                "/course-details/:courseName/assignments/:assignmentId/edit"
              )
            }
          >
            Edit
          </Button>
        </div> */}
      </CardContent>
    </Card>
  );
}

AnnouncementCard.propTypes = {
  title: PropTypes.string.isRequired, // name should be a required string
  createdAt: PropTypes.string.isRequired, // due should be a required string
  type: PropTypes.string.isRequired, // type should be a required string
  content: PropTypes.string.isRequired, // description should be a required string
};
