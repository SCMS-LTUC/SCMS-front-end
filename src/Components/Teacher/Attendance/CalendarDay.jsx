import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import PropTypes from "prop-types"; // Import PropTypes
import { Link } from "react-router-dom";
import { useState } from "react";
export default function CustomDay({
  day,
  highlightedDays,
  outsideCurrentMonth,
  isLastVisibleCell,
  isFirstVisibleCell,
}) {
  const [url, setUrl] = useState("");
  // const navigate = useNavigate();
  function onDaySelect() {
    setUrl("/attendance/post");
  }
  const isSelected = highlightedDays.some((date) => {
    if (dayjs(date).isSame(day, "day")) return true;
    else return false;
  });
  const isToday = () => {
    const now = dayjs();
    console.log("************", dayjs(now).isSame(day, "day"));
    return dayjs(now).isSame(day, "day");
  };
  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isSelected ? undefined : undefined}
    >
      <PickersDay
        day={day}
        component={Link}
        to={url}
        disabled={!(isSelected && isToday())}
        outsideCurrentMonth={outsideCurrentMonth}
        // onClick={() => onDaySelect()}
        onDaySelect={() => onDaySelect()}
        isLastVisibleCell={isLastVisibleCell}
        isFirstVisibleCell={isFirstVisibleCell}
        className={
          isSelected
            ? ` hover:!bg-primary-dark !rounded-lg !text-neutral-surface !shadow-md !shadow-neutral-border !transition-all ${
                isToday()
                  ? "!bg-primary-dark transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                  : "!bg-primary-light"
              }`
            : ""
        }
      />
    </Badge>
  );
}

CustomDay.propTypes = {
  day: PropTypes.object.isRequired, // Validate that 'day' is an object and is required
  highlightedDays: PropTypes.array.isRequired,
  outsideCurrentMonth: PropTypes.bool.isRequired,
  isLastVisibleCell: PropTypes.bool.isRequired,
  isFirstVisibleCell: PropTypes.bool.isRequired,
};