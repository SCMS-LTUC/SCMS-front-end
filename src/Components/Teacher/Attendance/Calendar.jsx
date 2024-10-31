import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import CalendarDay from "./CalendarDay";
function CalendarWithHighlights() {
  const lecturesDates = [
    "2024-10-1",
    "2024-10-3",
    "2024-10-6",
    "2024-10-8",
    "2024-10-10",
    "2024-10-13",
    "2024-10-31",
  ];

  const [highlightedDays, setHighlightedDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  // Filter dates in the highlightDates list to include only those with the same month and year as selectedMonth
  const filterDatesByMonthAndYear = (now) => {
    return lecturesDates.filter(
      (date) =>
        dayjs(date).isSame(now, "month") && dayjs(date).isSame(now, "year")
    );
  };

  useEffect(() => {
    setHighlightedDays(filterDatesByMonthAndYear(selectedDate));
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
              highlightedDays,
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default CalendarWithHighlights;
