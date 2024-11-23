import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const AbsenceCalendar = ({ absenceDates }) => {
  const absenceDays = absenceDates.map((date) => dayjs(date.lectureDate));

  return (
    <div className="w-fit border-2 border-neutral-border !bg-white">
      {/* <h3 className="text-lg font-bold mb-4">Absence Calendar</h3> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          slots={{
            day: ({ day, ...props }) => {
              const isAbsent = absenceDays.some((absentDay) =>
                day.isSame(absentDay, "day")
              );

              return (
                <div
                  {...props}
                  className={`w-10 h-10  flex items-center justify-center rounded-full ${
                    isAbsent ? "bg-primary-light text-white" : "bg-transparent "
                  }`}
                >
                  {day.date()}
                </div>
              );
            },
          }}
          sx={{
            "& .MuiPickersCalendarHeader-label": {
              color: "#E65D2E", // Change this to your desired color
              fontWeight: "bold",
            },
            "& .MuiPickersCalendarHeader-switchViewButton": {
              color: "#E65D2E", // Change this to your desired color
            },
            "& .MuiPickersArrowSwitcher-button": {
              color: "#E65D2E", // Change this to your desired color
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default AbsenceCalendar;

AbsenceCalendar.propTypes = {
  absenceDates: PropTypes.array.isRequired,
};
