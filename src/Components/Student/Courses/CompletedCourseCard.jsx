// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Card, CardContent, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

function handleDownload(certificateId) {
  console.log(`Downloading certificate for course ${certificateId}`);
}
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
const InfoCard = ({
  //   courseId,
  courseName,
  //   teacher,
  startDate,
  endDate,
  numberOfHours,
  certificateId,
  averagedGrade,
  description,
}) => {
  return (
    <Card className="container  !bg-neutral-surface !rounded-lg !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !p-4">
      <CardContent className="flex flex-col !h-full !justify-between !pb-4 !space-y-4 !text-base">
        <div id="title" className="  items-center">
          <div className="flex justify-between">
            <Typography className=" !text-neutral-textPrimary !font-bold !text-3xl">
              {courseName}
            </Typography>
            <Typography className="text-neutral-textSecondary !font-medium text-lg">
              Score:{averagedGrade}%
            </Typography>
          </div>
          <div className="text-neutral-textMedium">
            {description.substring(0, 100)}
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-2">
            <div className="font-semibold">Duration:</div>
            <div>
              {formatDate(startDate)} - {formatDate(endDate)}
            </div>
          </div>
          <div>Credit Hours:{numberOfHours}</div>
        </div>
        <div className="flex items-center h-14 justify-between !bg-green-100 !p-2">
          <div className="flex gap-2 ">
            <EmojiEventsIcon className="!text-accent-success" />
            <Typography className="!text-green-700">
              Congratulations! You&apos;ve completed this course
            </Typography>
          </div>

          <Button
            color="textMedium"
            variant="contained"
            className="!text-white"
            startIcon={<FileDownloadOutlinedIcon />}
            onClick={() => {
              handleDownload(certificateId);
            }}
          >
            Download Certificate
          </Button>
        </div>
      </CardContent>
    </Card>
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
};

export default InfoCard;
