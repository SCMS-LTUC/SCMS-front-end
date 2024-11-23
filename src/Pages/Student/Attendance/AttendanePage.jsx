import AttendanceSummary from "../../../Components/Student/Attendance/Summary";
// import AbsenceCalendar from "../../../Components/Student/Attendance/AbsenceCalendar";
import AbsenceTable from "../../../Components/Student/Attendance/AbsenceTable";
import AttendancePolicy from "../../../Components/Student/Attendance/AttendancePolicy";
import { useParams } from "react-router-dom";
import {
  courseLectures,
  studentAbsenceDates,
} from "../../../Logic/Student/Data";

const AttendancePage = () => {
  const { courseId } = useParams();
  const absenceDates = studentAbsenceDates.$values;
  const totalClasses = courseLectures.$values.length;
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
