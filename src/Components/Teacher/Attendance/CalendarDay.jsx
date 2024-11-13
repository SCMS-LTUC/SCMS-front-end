import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import PropTypes from "prop-types"; // Import PropTypes
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
export default function CustomDay({
  day,
  highlightedDays,
  outsideCurrentMonth,
  isLastVisibleCell,
  isFirstVisibleCell,
}) {
  const navigate = useNavigate();
  const [lectureId, setLectureId] = useState("");
  function onDaySelect() {
    if (lectureId !== "")
      navigate(`/course-details/:courseName/attendance/${lectureId}/post`);
  }
  const isSelected = useMemo(() => {
    return highlightedDays.some((lecture) => {
      if (dayjs(lecture.date).isSame(day, "day")) {
        if (dayjs(lecture.date).isSame(dayjs(), "day"))
          setLectureId(lecture.id);

        return true;
      } else return false;
    });
  }, [highlightedDays, day]);

  const isToday = () => dayjs().isSame(day, "day");
  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isSelected ? undefined : undefined}
    >
      <PickersDay
        day={day}
        disabled={!(isSelected && isToday())}
        outsideCurrentMonth={outsideCurrentMonth}
        onDaySelect={() => onDaySelect()}
        isLastVisibleCell={isLastVisibleCell}
        isFirstVisibleCell={isFirstVisibleCell}
        className={
          isSelected
            ? ` hover:!bg-primary-dark !rounded-lg !text-neutral-surface !shadow-md !shadow-neutral-border !transition-all ${
                isToday()
                  ? "!bg-primary transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                  : "!bg-primary-light"
              }`
            : "!text-neutral-textSecondary"
        }
        sx={{
          width: 46,
          height: 36,
          margin: "5px",
        }}
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
