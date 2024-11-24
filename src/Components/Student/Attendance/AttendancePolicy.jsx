// import React from "react";

const AttendancePolicy = () => {
  return (
    <div className="bg-yellow-100 p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-2">Important Attendance Reminders</h3>
      <p>
        Maintain at least 80% attendance to receive your course completion
        certificate.
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>Arriving 15+ minutes late counts as a late arrival.</li>
        <li>Three late arrivals = One absence.</li>
        <li>Notify us 24 hours before planned absences.</li>
        <li>Missed sessions are non-refundable.</li>
      </ul>
    </div>
  );
};

export default AttendancePolicy;
