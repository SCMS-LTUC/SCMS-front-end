import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  IconButton,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RoomIcon from "@mui/icons-material/Room";
import DownloadIcon from "@mui/icons-material/Download";

const InfoCard = ({
  courseName,
  teacher,
  progress,
  date,
  classroom,
  onDownload,
}) => {
  const navigate = useNavigate();

  return (
    <Card className=" lg:container shadow-lg m-4 !bg-neutral-surface ">
      <CardContent>
        <div className="flex justify-between mb-4">
          <Typography variant="h5" className="font-semibold text-primary">
            {courseName}
          </Typography>
          <Typography className="text-secondary font-medium">
            {teacher}
          </Typography>
        </div>

        <div className="flex items-center text-secondary mb-1">
          <CalendarTodayIcon
            className="mr-1"
            style={{ width: "16px", height: "16px" }}
          />
          <Typography>
            <strong>Date:</strong> {date}
          </Typography>
        </div>

        <div className="flex items-center text-secondary mb-1">
          <RoomIcon
            className="mr-1"
            style={{ width: "16px", height: "16px" }}
          />
          <Typography>
            <strong>Classroom:</strong> {classroom}
          </Typography>
        </div>

        <div className="my-4">
          <Typography className="text-secondary mb-1">
            <strong>Progress:</strong> {progress}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            className="mt-2"
            color="primary"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/course-details/${courseName}`)} // Navigate to course details page
          >
            Go to Course
          </Button>

          {/* Conditional Rendering for Download Certificate */}
          {progress === 100 && (
            <IconButton onClick={onDownload} title="Download Certificate">
              <DownloadIcon className="text-primary" />
            </IconButton>
          )}
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
};

export default InfoCard;
