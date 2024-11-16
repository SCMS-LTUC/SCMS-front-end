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

// rows is the response data = current courses
const rows = {
  $id: "1",
  $values: [
    {
      $id: "2",
      teacherName: "John Doe",
      subjectName: "Data Structures",
      startDate: "2024-09-05T00:00:00",
      endDate: "2024-12-15T00:00:00",
      startTime: "10:00:00",
      endTime: "12:00:00",
      days: {
        $id: "3",
        $values: ["Tuesday", "Thursday"],
      },
      className: "Data Structures",
      capacity: 150,
      classroomNumber: "2B",
    },
    {
      $id: "4",
      teacherName: "Jane Smith",
      subjectName: "Mathematics",
      startDate: "2024-09-10T00:00:00",
      endDate: "2024-12-20T00:00:00",
      startTime: "14:00:00",
      endTime: "16:00:00",
      days: {
        $id: "5",
        $values: ["Monday", "Friday"],
      },
      className: "Mathematics",
      capacity: 100,
      classroomNumber: "3C",
    },
    {
      $id: "6",
      teacherName: "Alice Brown",
      subjectName: "Physics",
      startDate: "2024-09-15T00:00:00",
      endDate: "2024-12-25T00:00:00",
      startTime: "09:00:00",
      endTime: "11:30:00",
      days: {
        $id: "7",
        $values: ["Wednesday", "Saturday"],
      },
      className: "Physics",
      capacity: 120,
      classroomNumber: "4D",
    },
  ],
};
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
    courseName: course.subjectName,
    datePeriod: `${formatDate(course.startDate)} - ${formatDate(course.endDate)}`,
    days: `${course.days.$values.join(", ")}`,
    time: `${formatTime(course.startTime)} - ${formatTime(course.endTime)}`,
    classroom: course.classroomNumber,
  };
};

// export default function Schedule() {
//   const columns = React.useMemo(
//     () => [
//       { id: "courseName", label: "Course Name", minWidth: 200 },
//       { id: "datePeriod", label: "Date Period", minWidth: 200 },
//       { id: "days", label: "Days", minWidth: 200 },
//       { id: "time", label: "Time", minWidth: 200 },
//       { id: "classroom", label: "Classroom", minWidth: 100 },
//     ],
//     []
//   );
//   console.log(columns);
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             {columns.map((column) => (
//               <TableCell
//                 key={column.id}
//                 align={column.align}
//                 style={{ minWidth: column.minWidth }}
//               >
//                 {column.label}
//               </TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.$values.map((row) => {
//             const data = formattedData(row);
//             return (
//               <TableRow hover role="checkbox" tabIndex={-1} key={uuidv4()}>
//                 <TableCell>{data.courseName}</TableCell>
//                 <TableCell>{data.datePeriod}</TableCell>
//                 <TableCell>{data.days}</TableCell>
//                 <TableCell>{data.time}</TableCell>
//                 <TableCell>{data.classroom}</TableCell>{" "}
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
export default function Schedule() {
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
                  className="!text-primary !font-bold !bg-neutral-background !text-xl"
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
            {rows.$values.map((row) => {
              const data = formattedData(row);
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={uuidv4()}
                  className="hover:!bg-neutral-background"
                >
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {data.courseName}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {data.datePeriod}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {data.days}
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
