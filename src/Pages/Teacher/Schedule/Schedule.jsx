import "./Schedule.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // Month view plugin
import interactionPlugin from "@fullcalendar/interaction"; // For date-click functionality
import { useState } from "react";
import { useEffect } from "react";
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);

  // Extract the date part in 'YYYY-MM-DD' format
  return date.toISOString().split("T")[0];
};
const App = () => {
  const [lectureDates, setLectureDates] = useState([]);
  const [calendarKey, setCalendarKey] = useState(0);

  useEffect(() => {
    //lectures is the data response
    const lectures = [
      {
        LectureId: 1,
        LectureDate: "2024-11-10T21:09:02.814Z",
      },
      {
        LectureId: 2,
        LectureDate: "2024-11-12T21:09:02.814Z",
      },
      {
        LectureId: 3,
        LectureDate: "2024-11-15T21:09:02.814Z",
      },
      {
        LectureId: 4,
        LectureDate: "2024-11-20T21:09:02.814Z",
      },
      {
        LectureId: 5,
        LectureDate: "2024-12-20T21:09:02.814Z",
      },
    ];
    const formattedLectures = lectures.map((l, index) => ({
      date: formatDate(l.LectureDate),
      title: `Lecture ${index + 1}`,
    }));
    setLectureDates(formattedLectures);
    setCalendarKey((prevKey) => prevKey + 1); // Force re-render of the calendar
  }, []);

  // Custom rendering logic for day cells
  const renderDayCell = (info) => {
    if (!lectureDates) {
      return;
    }
    const today = new Date().toISOString().split("T")[0]; // Get today's date in 'YYYY-MM-DD' format
    console.log("Lecture Dates:========", lectureDates); // Add this line to log lectureDates

    const isLecture = lectureDates.find(
      (lecture) => lecture.date === info.dateStr
    );
    const isTodayLecture = isLecture && info.dateStr === today;
    console.log("Today:", today);
    console.log("Cell Date:", info.dateStr);
    console.log("Is  Lecture:", isLecture);
    console.log("Is Today Lecture:", isTodayLecture);
    // Apply custom styles conditionally
    if (isLecture) {
      //   info.el.style.cursor = "default";
      //   info.el.style.pointerEvents = "none";

      if (isTodayLecture) {
        // info.el.style.pointerEvents = "auto";
        info.el.style.cursor = "pointer";

        // Add a click handler
        info.el.onclick = () =>
          alert(`Clicked on today's lecture date: ${info.dateStr}`);
      }
    }
  };

  return (
    <div style={{ width: "800px", margin: "0 auto", padding: "24px" }}>
      <FullCalendar
        key={calendarKey}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={lectureDates} // Highlight lecture dates as events
        headerToolbar={{
          left: "title",
          right: "prev,next",
          center: "",
        }}
        dayCellContent={(info) => {
          // Render the day number
          return <div>{info.dayNumberText}</div>;
        }}
        datesSet={() => {
          // Custom rendering for each visible day cell
          const cells = document.querySelectorAll(".fc-daygrid-day");
          cells.forEach((cell) => {
            const dateStr = cell.getAttribute("data-date");
            renderDayCell({ el: cell, dateStr });
          });
        }}
      />
    </div>
  );
};

export default App;
