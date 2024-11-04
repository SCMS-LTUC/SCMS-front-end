import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import CalendarDay from "./CalendarDay";

const calendarStyle = {
  ".MuiDayPicker-weekContainer": { marginBottom: 1 },
  ".MuiPickersDay-root": { fontSize: "1.2rem" },

  "& .MuiDateCalendar-root": {
    height: "100% !important",
    maxHeight: "none !important",
  },
  "& .MuiPickersLayout-contentWrapper": {
    height: "100% !important",
    maxHeight: "none !important",
  },
  "& .MuiDayCalendar-monthContainer": {
    height: "100% !important",
    maxHeight: "none !important",
  },
  "& *": {
    overflow: "visible !important",
  },
  "& .MuiDayCalendar-weekContainer": {
    justifyContent: "space-around",
    flex: 1,
  },

  "& .MuiDayCalendar-header": {
    justifyContent: "space-around",
    flex: 1,
    fontSize: "300px !important",
  },

  "& .MuiDayCalendar-weekDayLabel": {
    color: "#3B7A70 !important",
    // fontSize: "1.2rem !important",
    fontWeight: 700,
  },

  "& .MuiPickersCalendarHeader-root": {
    "& .MuiPickersCalendarHeader-label": {
      // Target the label containing month/year
      fontSize: "1.25rem !important",
      fontWeight: 700,
    },
    // Style for the arrow buttons if needed
    "& .MuiIconButton-root": {
      transform: "scale(1.2)", // Make arrows bigger
    },
  },

  height: "70vh", // 70% of viewport height
  width: "700px",
  // color: "red",
  // borderRadius: "12px",
  // paddingBottom: 4,
  // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  // height: "500px",
  // width: "500px",
  // marginBottom: "10px",
};

// const calendarStyle = {
//   // Reset all default height constraints
//   "& .MuiDateCalendar-root": {
//     height: "100%",
//     maxHeight: "none",
//     display: "flex",
//     flexDirection: "column",
//   },
//   "& .MuiPickersLayout-contentWrapper": {
//     height: "100%",
//     maxHeight: "none",
//   },
//   "& .MuiDayCalendar-monthContainer": {
//     height: "100%",
//     maxHeight: "none",
//     display: "flex",
//     flexDirection: "column",
//   },
//   "& .MuiDayCalendar-weekContainer": {
//     justifyContent: "space-around",
//     flex: "1 1 0",
//     minHeight: 0,
//   },
//   "& .MuiDayCalendar-header": {
//     justifyContent: "space-around",
//     marginBottom: "8px",
//   },
//   // Adjust day sizes
//   ".MuiPickersDay-root": {
//     fontSize: "1.2rem",
//     width: "40px",
//     height: "40px",
//   },
//   // Container styles
//   width: "700px",
//   height: "90vh", // Increased from 70vh
//   display: "flex",
//   flexDirection: "column",

//   // Remove any overflow restrictions
//   "& *": {
//     overflow: "visible !important",
//   },
// };

function CalendarWithHighlights() {
  const lectures = [
    { id: "1", date: "2024-10-1" },
    { id: "2", date: "2024-10-3" },
    { id: "3", date: "2024-10-6" },
    { id: "4", date: "2024-10-31" },
    { id: "5", date: "2024-11-4" },
    { id: "6", date: "2024-11-5" },
  ];

  const [selectedMonthLectures, setSelectedMonthLectures] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  // Filter dates in the highlightDates list to include only those with the same month and year as selectedMonth
  const filterDatesByMonthAndYear = (date) => {
    return lectures.filter(
      (lecture) =>
        dayjs(lecture.date).isSame(date, "month") &&
        dayjs(lecture.date).isSame(date, "year")
    );
  };

  useEffect(() => {
    setSelectedMonthLectures(filterDatesByMonthAndYear(selectedDate));
  }, [selectedDate]);

  const handleMonthChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          defaultValue={dayjs()}
          value={selectedDate}
          onMonthChange={handleMonthChange}
          slots={{
            day: CalendarDay,
          }}
          slotProps={{
            day: {
              highlightedDays: selectedMonthLectures,
            },
          }}
          className=" !bg-neutral-background !border-2 !border-neutral-border !text-secondary-dark
          !shadow-md !shadow-neutral-border !rounded-xl !pb-2 "
          sx={calendarStyle}
        />
      </LocalizationProvider>
    </div>
  );
}

export default CalendarWithHighlights;
