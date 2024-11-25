import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import {
  Close as CloseIcon,
  AccessTime as ClockIcon,
} from "@mui/icons-material";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
const CourseDetailsDialog = ({
  open,
  onClose,
  courseId,
  name,
  description,
  teacher,
  duration,
  time,
  days,
  hours,
  price,
  handleOnClickEnroll,
}) => {
  // Sample course data - would normally come from props
  //   const courseData = {
  //     name: "Introduction to Transact-SQL",
  //     description:
  //       "Master the fundamentals of Transact-SQL (T-SQL), the powerful query language used in Microsoft SQL Server. Learn how to write efficient queries, manage databases, and manipulate data effectively. This course covers basic to intermediate concepts with hands-on exercises and real-world examples.Master the fundamentals of Transact-SQL (T-SQL), the powerful query language used in Microsoft SQL Server.",

  //     teacher: "Rana Salem",
  //     startDate: "2024-10-01",
  //     endDate: "2025-02-01",
  //     time: "08:00 - 10:00",
  //     days: ["Monday", "Wednesday"],
  //     hours: 54,
  //     price: 60,
  //   };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        style={{ position: "absolute", right: 16, top: 16 }}
      >
        <CloseIcon />
      </IconButton>

      {/* Title */}
      <DialogTitle>
        <Typography className="!font-semibold !text-2xl">{name}</Typography>
      </DialogTitle>

      {/* Content */}
      <DialogContent dividers className="space-y-4">
        <Typography className=" !text-base space-y-2">
          <div className="!font-medium !text-xl">What will you learn?</div>
          <div> {description}</div>
        </Typography>
        <Divider className="" />
        <Grid container className="space-y-" spacing={4}>
          {/* Instructor */}
          <Grid item xs={6}>
            <Typography
              display="flex"
              alignItems="center"
              className="!text-base"
            >
              <PersonOutlineOutlinedIcon
                style={{ marginRight: 8 }}
                className="!text-secondary"
              />
              Instructor
            </Typography>
            <Typography className="!text-base">{teacher}</Typography>
          </Grid>

          {/* Duration */}
          <Grid item xs={6}>
            <Typography
              display="flex"
              alignItems="center"
              className="!text-base"
            >
              <CalendarTodayOutlinedIcon
                style={{ marginRight: 8 }}
                className="!text-secondary"
              />
              Duration
            </Typography>
            <Typography className="!text-base">{duration}</Typography>
          </Grid>

          {/* Time */}
          <Grid item xs={6}>
            <Typography
              display="flex"
              alignItems="center"
              className="!text-base"
            >
              <ClockIcon
                style={{ marginRight: 8 }}
                className="!text-secondary"
              />
              Time
            </Typography>
            <Typography className="!text-base">{time}</Typography>
          </Grid>

          {/* Days */}
          <Grid item xs={6}>
            <Typography
              display="flex"
              alignItems="center"
              className="!text-base"
            >
              <EventOutlinedIcon
                style={{ marginRight: 8 }}
                className="!text-secondary"
              />
              Days
            </Typography>
            <Typography className="!text-base">{days.join(", ")}</Typography>
          </Grid>

          {/* Hours */}
          <Grid item xs={6}>
            <Typography
              display="flex"
              alignItems="center"
              className="!text-base"
            >
              <HourglassEmptyOutlinedIcon
                style={{ marginRight: 8 }}
                className="!text-secondary"
              />
              Total Hours
            </Typography>
            <Typography className="!text-base">{hours} hours</Typography>
          </Grid>

          {/* Price */}
          <Grid item xs={6}>
            <Typography
              display="flex"
              alignItems="center"
              className="!text-base"
            >
              <LocalAtmOutlinedIcon
                style={{ marginRight: 8 }}
                className="!text-secondary"
              />
              Price
            </Typography>
            <Typography fontWeight="bold" className="!text-base">
              ${price}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>

      {/* Actions */}
      <DialogActions className="flex items-center">
        <Button
          onClick={onClose}
          color="textMedium"
          variant="outlined"
          //   className="!text-white"
        >
          Cancel
        </Button>
        <Button
          color="secondary"
          variant="contained"
          className="!text-white"
          onClick={() => {
            handleOnClickEnroll(courseId);
          }}
        >
          Enroll
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CourseDetailsDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  courseId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired,
  hours: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  handleOnClickEnroll: PropTypes.func.isRequired,
};

export default CourseDetailsDialog;
