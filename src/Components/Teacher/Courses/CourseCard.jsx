import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  // IconButton,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PlaceIcon from "@mui/icons-material/Place";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder"; // import DownloadIcon from "@mui/icons-material/Download";

const InfoCard = ({
  courseName,
  teacher,
  progress,
  // date,
  classroom,
  startTime,
  endTime,
  days,
  // onDownload,
}) => {
  const navigate = useNavigate();

  return (
    <Card className="container !h-72 !bg-neutral-surface !rounded-xl !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !p-2">
      <CardContent className="flex flex-col !h-full !justify-between">
        <div id="title" className="flex justify-between ">
          <Typography
            variant="h5"
            className=" !text-neutral-textPrimary !font-bold"
          >
            {courseName}
          </Typography>
          <Typography className="text-secondary font-medium">
            {teacher}
          </Typography>
        </div>

        <div id="progress">
          <Typography className="text-secondary mb-1 flex justify-between">
            <h1>Progress</h1>
            {progress}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            className="mt-2 rounded-lg !h-2"
            color="primary"
          />
        </div>

        <div id="icons" className="">
          <div className="flex items-center text-secondary ">
            <CalendarTodayIcon
              className="mr-1"
              style={{ width: "16px", height: "16px" }}
            />
            <Typography>
              {days.map((day, index) => (
                <span key={index}>
                  {day} {index !== days.length - 1 ? "," : " "}
                </span>
              ))}
            </Typography>
          </div>

          <div className="flex items-center text-secondary">
            <QueryBuilderIcon
              className="mr-1"
              style={{ width: "16px", height: "16px" }}
            />
            <Typography>
              <h1>
                {startTime} - {endTime}
              </h1>
            </Typography>
          </div>

          <div className="flex items-center text-secondary">
            <PlaceIcon
              className="mr-1"
              style={{ width: "16px", height: "16px" }}
            />
            <Typography>{classroom}</Typography>
          </div>
        </div>

        <div className="flex justify-end items-center ">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/course-details/${courseName}`)} // Navigate to course details page
            className="!text-neutral-surface"
          >
            Go to Course
          </Button>

          {/* Conditional Rendering for Download Certificate
          {progress === 100 && (
            <IconButton onClick={onDownload} title="Download Certificate">
              <DownloadIcon className="text-primary" />
            </IconButton>
          )} */}
        </div>
      </CardContent>
    </Card>
  );
};

InfoCard.propTypes = {
  courseName: PropTypes.string.isRequired, // courseName should be a required string
  teacher: PropTypes.string.isRequired, // teacher should be a required string
  progress: PropTypes.number.isRequired, // progress should be a required number
  date: PropTypes.oneOfType([
    // date should be a required date object or string
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]).isRequired,
  classroom: PropTypes.string, // classroom is an optional string
  onNavigate: PropTypes.func.isRequired, // onNavigate should be a required function
  onDownload: PropTypes.func.isRequired, // onDownload should be a required function
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  days: PropTypes.array.isRequired,
};

export default InfoCard;
