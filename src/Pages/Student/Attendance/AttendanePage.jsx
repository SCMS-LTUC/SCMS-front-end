import AttendanceSummary from "../../../Components/Student/Attendance/Summary";
// import AbsenceCalendar from "../../../Components/Student/Attendance/AbsenceCalendar";
import AbsenceTable from "../../../Components/Student/Attendance/AbsenceTable";
import AttendancePolicy from "../../../Components/Student/Attendance/AttendancePolicy";
import { useParams } from "react-router-dom";
import {
  courseLecturess,
  studentAbsenceDatess,
} from "../../../Logic/Student/Data";
import {
  useAttendance,
  useCourseLectures,
} from "../../../Logic/Student/useAttendance";

const AttendancePage = () => {
  const { courseId } = useParams();
  const { studentAbsenceDates } = useAttendance(courseId);
  console.log("studentAbsenceDates", studentAbsenceDates);
  console.log("studentAbsenceDatess", studentAbsenceDatess);
  const { courseLectures } = useCourseLectures(courseId);
  console.log("courseLectures", courseLectures);
  console.log("courseLecturess", courseLecturess);

  const absenceDates = studentAbsenceDatess.$values;
  const totalClasses = courseLecturess.$values.length;
  console.log(courseId);

  return (
    <div className="p-8 space-y-6">
      {/* Summary Section */}
      <AttendanceSummary
        totalClasses={totalClasses}
        absenceDates={absenceDates}
      />
      <AttendancePolicy />
      {/* Absence Records Table */}
      <div className="bg-white p-6 rounded shadow w-full">
        <h3 className="text-lg font-bold mb-4">Absence Records</h3>
        <AbsenceTable absenceDates={absenceDates} />
      </div>
    </div>
  );
};

export default AttendancePage;
