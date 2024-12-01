import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { v4 as uuidv4 } from "uuid";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PropTypes from "prop-types";
// rows is the response data = current courses

const formattedData = (course) => {
  const formatTime = (time) => {
    let [hour, minute] = time.split(":");
    hour = parseInt(hour, 10);
    const period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12; // Convert to 12-hour format
    return `${hour}:${minute} ${period}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return {
    courseName: course.className,
    datePeriod: `${formatDate(course.startDate)} - ${formatDate(course.endDate)}`,
    days: course.days,
    time: `${formatTime(course.startTime)} - ${formatTime(course.endTime)}`,
    classroom: course.classroomNumber,
  };
};

export default function Schedule({ scheduleCourses }) {
  const columns = React.useMemo(
    () => [
      {
        id: "courseName",
        label: "Course Name",
        minWidth: 200,
        icon: <FeedOutlinedIcon fontSize="small" />,
      },
      {
        id: "datePeriod",
        label: "Date Period",
        minWidth: 200,
        icon: <DateRangeOutlinedIcon fontSize="small" />,
      },
      {
        id: "days",
        label: "Days",
        minWidth: 200,
        icon: <CalendarTodayOutlinedIcon fontSize="small" />,
      },
      {
        id: "time",
        label: "Time",
        minWidth: 200,
        icon: <AccessTimeOutlinedIcon fontSize="small" />,
      },
      {
        id: "classroom",
        label: "Classroom",
        minWidth: 100,
        icon: <GridViewOutlinedIcon fontSize="small" />,
      },
    ],
    []
  );

  return (
    <Paper
      sx={{ width: "100%", overflow: "hidden" }}
      className="!border-2 !border-neutral-border !text-secondary-dark !shadow-md !shadow-neutral-border !rounded-lg"
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                  className="!text-primary-dark !font-bold !bg-neutral-background !text-xl"
                >
                  <div className="flex items-center gap-2">
                    {column.icon}
                    {column.label}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduleCourses.map((row) => {
              const data = formattedData(row);
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={uuidv4()}
                  className="hover:!bg-neutral-background"
                >
                  <TableCell className="!text-neutral-textPrimary !font-medium !bg-neutral-surface !text-lg">
                    {data.courseName}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {data.datePeriod}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {data.days.map((day, index) => (
                      <span key={index}>
                        {day.slice(0, 3)}
                        {index !== data.days.length - 1 ? ", " : " "}
                      </span>
                    ))}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {data.time}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {data.classroom}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

Schedule.propTypes = {
  scheduleCourses: PropTypes.object,
};
