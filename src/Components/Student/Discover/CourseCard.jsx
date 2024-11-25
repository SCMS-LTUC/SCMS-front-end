import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import courseImage from "../../../Assets/Images/CourseImages/4804267.jpg";
import PropTypes from "prop-types"; // Import PropTypes
import { Chip, Card, CardContent, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import CourseDetailsDialog from "./CourseDetailsDialog";
import { Button, Typography, Divider } from "@mui/material";

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
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};
const InfoCard = ({
  courseId,
  courseName,
  teacher,
  // department,
  startDate,
  endDate,
  startTime,
  endTime,
  days,
  description,
  // level,
  capacity,
  numberOfEnrolledStudents,
  price,
  numberOfHours,
  handleOnClickEnroll,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const time =
    startTime.split(":").slice(0, 2).join(":") +
    " - " +
    endTime.split(":").slice(0, 2).join(":");

  const duration = formatDate(startDate) + " - " + formatDate(endDate);

  return (
    <StyledCard className="bg-white shadow-lg rounded-lg !border !border-neutral-border">
      <CardContent className=" !pb-4">
        <div className="space-y-4 p-2">
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
              className={`${description === "N/A" ? "text-white" : "text-neutral-textSecondary"} !p-0 !m-0 !text-base`}
            >
              {truncateText(description, 13)}
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
              className="!bg-neutral-surface !text-accent-error !text-base "
            />
          </div>
          <Divider className="!px-0 !mx-0" />

          {/* Price + View */}
          <div className="flex justify-between items-center">
            <Typography className="!font-bold !text-xl">
              {/* <span className="!font-semibold">Price:</span> */}${price}
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              // className="!text-white"
              endIcon={<ArrowForwardIosOutlinedIcon className="!text-white" />}
              onClick={handleClickOpen}
            >
              Course Details
            </Button>
          </div>
          <CourseDetailsDialog
            open={open}
            onClose={handleClose}
            handleOnClickEnroll={handleOnClickEnroll}
            courseId={courseId}
            name={courseName}
            teacher={teacher}
            description={description}
            duration={duration}
            time={time}
            days={days}
            hours={numberOfHours}
            price={price}
          />
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
