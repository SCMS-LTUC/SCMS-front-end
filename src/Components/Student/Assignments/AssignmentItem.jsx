import PropTypes from "prop-types";

const AssignmentItem = ({ assignment }) => {
  return (
    <li className="border p-4 mb-2 flex justify-between items-start">
      <div>
        <h2 className="text-xl font-bold">{assignment.title}</h2>
        <p>{assignment.description}</p>
        <span className="text-sm text-gray-500 mr-4"> <i className="ri-calendar-line mr-1"></i>Due: {assignment.dueDate}</span>
        <span className="text-sm text-gray-500"> <i className="ri-time-line mr-1"></i>11:59:59</span>
      </div>
      <div className="flex flex-col items-end">
        <span
          className={`text-sm font-semibold border shadow-md rounded-md p-2 mb-2 ${
            assignment.status === "Submitted" ? "text-green-500" : "text-red-500"
          }`}
        >
          {assignment.status}
        </span>
        {assignment.status === "Submitted" && (
          <span className="text-md text-gray-700 border shadow-md rounded-md p-2 ">Grade: {assignment.grade} / {assignment.mark}</span>
        )}
      </div>
    </li>
  );
};

AssignmentItem.propTypes = {
  assignment: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["Submitted", "Not Submitted"]).isRequired,
    grade: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mark: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default AssignmentItem;