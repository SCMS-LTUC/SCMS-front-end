import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PlaceIcon from "@mui/icons-material/Place";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PropTypes from "prop-types"; // Import PropTypes
import {
  Chip,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Material-UI Card
const StyledCard = styled(Card)`
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
    transition: all 0.2s ease-in-out;
  }
  cursor: pointer;
`;

const calculateProgress = (startDate, endDate) => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now < start) return 0;
  if (now > end) return 100;

  const totalDuration = end - start;
  const elapsedDuration = now - start;
  return Math.round((elapsedDuration / totalDuration) * 100);
};

const InfoCard = ({
  courseName,
  teacher,
  classroom,
  startTime,
  endTime,
  days,
  startDate,
  endDate,
  onNavigate,
}) => {
  const progress = calculateProgress(startDate, endDate);

  return (
    <StyledCard
      onClick={onNavigate}
      className="bg-white shadow-lg rounded-lg border"
    >
      <CardContent>
        <div className="space-y-6 ">
          {/* Course Name */}
          <div className="!space-y-0">
            <Tooltip title={courseName} arrow>
              <Typography
                // variant="h6"
                noWrap
                className="overflow-hidden text-ellipsis whitespace-nowrap !font-semibold !p-0 !m-0 !text-2xl"
              >
                {courseName}
                {/* Introduction to Computer Science */}
              </Typography>
            </Tooltip>
            <Typography
              // variant="body2"
              className="text-neutral-textSecondary !p-0 !m-0 !text-base"
            >
              {teacher}
            </Typography>
          </div>

          <div className=" flex-col space-y-2">
            <div className="flex justify-between  items-center space-x- ">
              <Chip
                icon={<CalendarTodayIcon className="!text-primary " />}
                label={days.map((day, index) => (
                  <span key={index}>
                    {day.slice(0, 3)}
                    {index !== days.length - 1 ? ", " : " "}
                  </span>
                ))}
                className="!bg-neutral-surface !text-neutral-textMedium !text-base"
              />
              <Chip
                icon={<QueryBuilderIcon className="!text-primary" />}
                label={`${startTime.split(":").slice(0, 2).join(":")} - ${endTime.split(":").slice(0, 2).join(":")}`}
                className="!bg-neutral-surface !text-neutral-textMedium !text-base"
              />
            </div>

            <div>
              <Chip
                icon={<PlaceIcon className="!text-primary" />}
                label={classroom}
                className="!bg-neutral-surface !text-neutral-textMedium !text-base "
              />
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-4 space-y-1">
            <LinearProgress
              variant="determinate"
              value={progress}
              className="rounded-lg h-2"
            />
            <Typography
              variant="body2"
              className="!text-neutral-textMedium mb-1 !text-base"
            >
              {progress}% Complete
            </Typography>
          </div>
        </div>
      </CardContent>
    </StyledCard>
  );
};

// PropTypes for validation
InfoCard.propTypes = {
  courseName: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  classroom: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default InfoCard;
