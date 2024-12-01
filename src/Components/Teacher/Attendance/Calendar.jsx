import "./CalendarStyle.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { useEffect } from "react";
import PostDialog from "./PostTableDialog.jsx";
import { useParams } from "react-router-dom";
import { useLectures } from "../../../Logic/Teacher/useLectures.js";
//import { useCourse } from "../../../Logic/Teacher/useAllCourses.jsx";
import { useClassList } from "../../../Logic/Teacher/useClassList.js";
import PropTypes from "prop-types";

const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);

  // Extract the date part in 'YYYY-MM-DD' format
  return date.toISOString().split("T")[0];
};

const App = ({ postSuccessfully, errorInPost }) => {
  const { courseId } = useParams();
  const { students } = useClassList(courseId);
  console.log(students);
  const { lectures, status, error } = useLectures(courseId);
  console.log(lectures);
  const [lectureDates, setLectureDates] = useState([]);
  const [calendarKey, setCalendarKey] = useState(0);
  const [postDialogOpen, setPostDialogOpen] = useState(false);
  const [selectedLectureId, setSelectedLectureId] = useState(null);

  const rows = students.map((student) => ({
    studentID: student.studentId,
    fullName: student.studentName,
  }));

  const handleDialogOpen = (id) => {
    setSelectedLectureId(id);
    console.log(selectedLectureId);
    setPostDialogOpen(true);
  };

  const handleDialogClose = () => {
    setPostDialogOpen(false);
  };

  useEffect(() => {
    const formattedLectures = lectures.map((l, index) => ({
      date: formatDate(l.lectureDate),
      title: `Lecture ${index + 1}`,
      extendedProps: { LectureId: l.lectureId },
    }));
    setLectureDates(formattedLectures);
    setCalendarKey((prevKey) => prevKey + 1); // Force re-render of the calendar
  }, [lectures]);

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
      console.log(clickInfo.event.extendedProps.LectureId);
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div
      style={{ width: "980px", margin: "0 auto" }}
      className="!border-2 !border-neutral-border !text-secondary-dark  !shadow-neutral-border !shadow-md !rounded-lg"
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
          postSuccessfully={postSuccessfully}
          errorInPost={errorInPost}
        />
      </div>
    </div>
  );
};
App.propTypes = {
  postSuccessfully: PropTypes.func.isRequired,
  errorInPost: PropTypes.func.isRequired,
};
export default App;
