import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  Chip,
  // IconButton,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PlaceIcon from "@mui/icons-material/Place";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder"; // import DownloadIcon from "@mui/icons-material/Download";

function calculateProgress(startDate, endDate) {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  console.log("start", start);
  console.log("end", end);
  // Ensure the current date is within the range
  if (now < start) return 0; // Before the start date
  if (now > end) return 100; // After the end date

  // Calculate the progress percentage
  const totalDuration = end - start;
  const elapsedDuration = now - start;
  const progress = (elapsedDuration / totalDuration) * 100;

  // Return progress as an integer
  return Math.round(progress);
}

const InfoCard = ({
  courseId,
  courseName,
  teacher,
  startDate,
  endDate,
  classroom,
  startTime,
  endTime,
  days,
  // onDownload,
}) => {
  const navigate = useNavigate();
  const progress = calculateProgress(startDate, endDate);

  return (
    <Card className="container  !bg-neutral-surface !rounded-lg !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !p-4">
      <CardContent className="flex flex-col !h-full !justify-between !pb-4 !space-y-4">
        <div id="title" className="flex justify-between items-center">
          <Typography className=" !text-neutral-textPrimary !font-bold !text-3xl">
            {courseName}
          </Typography>
          <Typography className="text-secondary !font-medium">
            {teacher}
          </Typography>
        </div>

        <div id="progress">
          <Typography className="text-secondary mb-1 flex justify-between !text-base !font-medium">
            <h1>Progress</h1>
            {progress}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            className="mt-2 rounded-lg !h-2 !font-medium"
            color="primary"
          />
        </div>

        <div className="flex justify-between items-end !font-medium">
          <div id="icons" className="">
            <div>
              <Chip
                icon={
                  <CalendarTodayIcon className="!text-neutral-textMedium " />
                }
                label={days.map((day, index) => (
                  <span key={index}>
                    {day} {index !== days.length - 1 ? "," : " "}
                  </span>
                ))}
                className="!bg-neutral-surface !text-secondary !text-base"
              />
            </div>

            <div>
              <Chip
                icon={<QueryBuilderIcon className="!text-neutral-textMedium" />}
                label={
                  <h1>
                    {startTime} - {endTime}
                  </h1>
                }
                className="!bg-neutral-surface !text-secondary !text-base"
              />
            </div>

            <div>
              <Chip
                icon={<PlaceIcon className="!text-neutral-textMedium" />}
                label={classroom}
                className="!bg-neutral-surface !text-secondary !text-base"
              />
            </div>
          </div>

          <div id="button" className="flex justify-end items-center ">
            {console.log("this is the course Id", courseId)}
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                navigate(`/course-details/${courseId}/announcements`)
              }
              className="!text-neutral-surface"
            >
              Go to Course
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

InfoCard.propTypes = {
  courseId: PropTypes.number.isRequired,
  courseName: PropTypes.string.isRequired, // courseName should be a required string
  teacher: PropTypes.string.isRequired, // teacher should be a required string
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
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default InfoCard;