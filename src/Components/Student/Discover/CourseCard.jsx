import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PropTypes from "prop-types"; // Import PropTypes
import { Chip, Card, CardContent, Typography, Tooltip } from "@mui/material";
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
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const InfoCard = ({
  // courseId,
  courseName,
  teacher,
  // department,
  startDate,
  endDate,
  // startTime,
  // endTime,
  // days,
  // description,
  // level,
  capacity,
  numberOfEnrolledStudents,
  // price,
  numberOfHours,
  // handleOnClickEnroll,
}) => {
  return (
    <StyledCard className="bg-white shadow-lg rounded-lg border">
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
              className={`${teacher === "N/A" ? "text-white" : "text-neutral-textSecondary"} !p-0 !m-0 !text-base`}
            >
              {teacher}
            </Typography>
          </div>

          <div className=" flex flex-col items-start space-y-2">
            <Chip
              icon={
                <CalendarMonthOutlinedIcon className="!text-secondary-dark " />
              }
              label={`${formatDate(startDate)} - ${formatDate(endDate)}`}
              className="!bg-neutral-surface !text-neutral-textMedium !text-base"
            />
            <Chip
              icon={
                <HourglassEmptyOutlinedIcon className="!text-secondary-dark" />
              }
              label={`${numberOfHours} hours`}
              className="!bg-neutral-surface !text-neutral-textMedium !text-base "
            />
            <Chip
              icon={<PeopleAltOutlinedIcon className="!text-secondary-dark" />}
              label={`${capacity - numberOfEnrolledStudents} seats left`}
              className="!bg-neutral-surface !text-neutral-textMedium !text-base "
            />
          </div>
        </div>
      </CardContent>
    </StyledCard>
  );
};

// PropTypes for validation
InfoCard.propTypes = {
  courseId: PropTypes.number.isRequired,
  courseName: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  numberOfEnrolledStudents: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  numberOfHours: PropTypes.number.isRequired,
  handleOnClickEnroll: PropTypes.func.isRequired,
};

export default InfoCard;
