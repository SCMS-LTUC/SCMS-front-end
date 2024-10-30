import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import PropTypes from "prop-types"; // Import PropTypes

function onDaySelect() {}

export default function CustomDay({
  day,
  highlightedDays,
  outsideCurrentMonth,
  isLastVisibleCell,
  isFirstVisibleCell,
}) {
  const isSelected = highlightedDays.some((date) => {
    if (
      dayjs(date).isSame(day, "day") &&
      dayjs(date).isSame(day, "month") &&
      dayjs(date).isSame(day, "year")
    )
      return true;
    else return false;
  });
  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isSelected ? undefined : undefined}
    >
      <PickersDay
        day={day}
        outsideCurrentMonth={outsideCurrentMonth}
        onDaySelect={() => onDaySelect(day)}
        isLastVisibleCell={isLastVisibleCell}
        isFirstVisibleCell={isFirstVisibleCell}
        className={
          isSelected
            ? "!bg-primary-dark hover:!bg-primary-light !rounded-lg !text-neutral-surface !shadow-md !shadow-neutral-border !transition-all"
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
