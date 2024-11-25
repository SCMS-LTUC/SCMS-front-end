// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Tooltip,
  Chip,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import { styled } from "@mui/material/styles";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
const StyledCard = styled(Card)`
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
    transition: all 0.2s ease-in-out;
  }
  cursor: pointer;
`;
const InfoCard = ({
  courseId,
  courseName,
  //   teacher,
  startDate,
  endDate,
  numberOfHours,
  certificateId,
  averagedGrade,
  // description,
  handleDownload,
}) => {
  console.log(courseId);
  return (
    <StyledCard
      // onClick={onNavigate}
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
              {/* {teacher} */}
              Score: {averagedGrade}%
            </Typography>
          </div>

          <div className=" flex-col space-y-2">
            <div className="flex justify-between  items-center space-x- ">
              <Chip
                icon={
                  <CalendarMonthOutlinedIcon className="!text-secondary-dark " />
                }
                label={`Duration: ${formatDate(startDate)} - ${formatDate(endDate)}`}
                className="!bg-neutral-surface !text-neutral-textMedium !text-base"
              />
            </div>

            <div>
              <Chip
                icon={
                  <HourglassEmptyOutlinedIcon className="!text-secondary-dark" />
                }
                label={`Credit Hours: ${numberOfHours} hours`}
                className="!bg-neutral-surface !text-neutral-textMedium !text-base "
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <Chip
                icon={<EmojiEventsIcon className="!text-accent-warning" />}
                label={"Congratulations!"}
                className="!bg-neutral-surface !text-neutral-textMedium !text-base "
              />
            </div>
            <div>
              <Button
                color="secondary"
                variant="contained"
                // className="!text-white"
                startIcon={<FileDownloadOutlinedIcon />}
                onClick={() => {
                  handleDownload(certificateId);
                }}
              >
                Certificate
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </StyledCard>
  );
};

InfoCard.propTypes = {
  courseId: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  numberOfHours: PropTypes.string.isRequired,
  certificateId: PropTypes.string.isRequired,
  averagedGrade: PropTypes.number.isRequired,
  description: PropTypes.string,
  handleDownload: PropTypes.func.isRequired,
};

export default InfoCard;
