import "./CalendarStyle.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { useEffect } from "react";
import PostDialog from "./PostTableDialog.jsx";

const rows = [
  { studentID: 1, fullName: "John Doe" },
  { studentID: 2, fullName: "Jane Smith" },
  { studentID: 1, fullName: "John Doe" },
  { studentID: 2, fullName: "Jane Smith" },
  { studentID: 1, fullName: "John Doe" },
  { studentID: 2, fullName: "Jane Smith" },
  { studentID: 1, fullName: "John Doe" },
  { studentID: 2, fullName: "Jane Smith" },
  { studentID: 1, fullName: "John Doe" },
  { studentID: 2, fullName: "Jane Smith" },
  { studentID: 1, fullName: "John Doe" },
  { studentID: 2, fullName: "Jane Smith" },
];
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);

  // Extract the date part in 'YYYY-MM-DD' format
  return date.toISOString().split("T")[0];
};

const App = () => {
  const [lectureDates, setLectureDates] = useState([]);
  const [calendarKey, setCalendarKey] = useState(0);
  const [postDialogOpen, setPostDialogOpen] = useState(false);
  const [selectedLectureId, setSelectedLectureId] = useState(null);

  const handleDialogOpen = (id) => {
    setSelectedLectureId(id);
    setPostDialogOpen(true);
  };

  const handleDialogClose = () => {
    setPostDialogOpen(false);
  };

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
      extendedProps: { LectureId: l.LectureId },
    }));
    setLectureDates(formattedLectures);
    setCalendarKey((prevKey) => prevKey + 1); // Force re-render of the calendar
  }, []);

  const eventClassNames = (event) => {
    // Apply class to today's event or standard event
    if (event.isToday) {
      return ["custom-event"]; // Add custom styles for today’s lecture
    }
  };

  const handleEventClick = (clickInfo) => {
    const date = clickInfo.event.start.toLocaleDateString("en-CA"); // 'en-CA' format is 'YYYY-MM-DD'
    const today = new Date().toLocaleDateString("en-CA"); // Get today's date in 'YYYY-MM-DD' format
    const isToday = today === date;

    // Check if the event is `isTodayLecture`
    if (isToday) {
      // alert(
      //   `Clicked on today's lecture: ${clickInfo.event.extendedProps.LectureId}`
      // );
      handleDialogOpen(clickInfo.event.extendedProps.LectureId);
    }
  };

  return (
    <div
      style={{ width: "980px", margin: "0 auto" }}
      className="!border-2 !border-neutral-border !text-secondary-dark  !shadow-neutral-border !shadow-md !rounded-xl"
    >
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
        eventClassNames={eventClassNames}
        eventClick={handleEventClick}
      />
      <div>
        <PostDialog
          rows={rows}
          open={postDialogOpen}
          onClose={handleDialogClose}
          lectureId={selectedLectureId}
        />
      </div>
    </div>
  );
};

export default App;
