import "./CalendarStyle.css";
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
      //   extendedProps: { date: formatDate(l.LectureDate) },
    }));
    setLectureDates(formattedLectures);
    setCalendarKey((prevKey) => prevKey + 1); // Force re-render of the calendar
  }, []);

  const eventClassNames = (event) => {
    // Apply class to today's event or standard event
    if (event.isToday) {
      return ["custom-event"]; // Add custom styles for today’s lecture
    }
    // return ["custom-event"]; // Apply regular event styles
  };

  const handleEventClick = (clickInfo) => {
    const date = clickInfo.event.start.toLocaleDateString("en-CA"); // 'en-CA' format is 'YYYY-MM-DD'
    const today = new Date().toLocaleDateString("en-CA"); // Get today's date in 'YYYY-MM-DD' format
    const isToday = today === date;
    // const { event } = clickInfo;
    console.log(clickInfo.event.start);
    console.log(today);
    console.log("this is the date", date);
    console.log(clickInfo);
    console.log(isToday);

    // Check if the event is `isTodayLecture`
    if (isToday) {
      alert(`Clicked on today's lecture: this is the event`);
    }
  };

  // Custom rendering logic for day cells
  //   const renderDayCell = (info) => {
  //     if (!lectureDates) {
  //       return;
  //     }
  //     const today = new Date().toISOString().split("T")[0]; // Get today's date in 'YYYY-MM-DD' format

  //     const isLecture = lectureDates.find(
  //       (lecture) => lecture.date === info.dateStr
  //     );
  //     const isTodayLecture = isLecture && info.dateStr === today;
  //     // Apply custom styles conditionally
  //     if (isLecture && isTodayLecture) {
  //       info.el.style.cursor = "pointer";
  //       // Add a click handler
  //       //   info.el.onclick = () =>
  //       //     alert(`Clicked on today's lecture date: ${info.dateStr}`);
  //     }
  //   };

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
        // eventContent={renderEventContent}
        // eventBackgroundColor={renderEventBackgroundColor}
        dayCellContent={(info) => {
          // Render the day number
          return <div>{info.dayNumberText}</div>;
        }}
        // datesSet={() => {
        //   // Custom rendering for each visible day cell
        //   const cells = document.querySelectorAll(".fc-daygrid-day");
        //   cells.forEach((cell) => {
        //     const dateStr = cell.getAttribute("data-date");
        //     renderDayCell({ el: cell, dateStr });
        //   });
        // }}
        eventClassNames={eventClassNames}
        eventClick={handleEventClick} // Handle event clicks here
      />
    </div>
  );
};

export default App;
