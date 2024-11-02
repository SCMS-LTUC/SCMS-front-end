import PropTypes from 'prop-types';

const StudentCard = ({ student }) => {
  return (
    <div className="border p-4 mb-2 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={student.avatar}
          alt={student.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{student.name}</h2>
          <p className="text-sm text-gray-500">{student.email}</p>
        </div>
      </div>
      <div className="text-2xl cursor-pointer border shadow-md mr-4 p-1 rounded-lg">
      <i className="ri-chat-1-line"></i>
      </div>
    </div>
  );
};

StudentCard.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
};

export default StudentCard;