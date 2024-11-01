import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import CalendarDay from "./CalendarDay";
function CalendarWithHighlights() {
  const lectures = [
    { id: "1", date: "2024-10-1" },
    { id: "2", date: "2024-10-3" },
    { id: "3", date: "2024-10-6" },
    { id: "4", date: "2024-10-31" },
    { id: "5", date: "2024-11-2" },
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
    <div className="!text-secondary-dark">
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
        />
      </LocalizationProvider>
    </div>
  );
}

export default CalendarWithHighlights;
