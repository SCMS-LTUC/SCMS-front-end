import PropTypes from "prop-types";
import StatCard from "./StatCard";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
// import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
const AttendanceSummary = ({ totalClasses, absenceDates }) => {
  const totalAbsences = absenceDates ? absenceDates.length : 0;
  const attendanceRate = ((totalClasses - totalAbsences) / totalClasses) * 100;

  const stats = [
    {
      title: "Total Classes",
      value: totalClasses.toString(),
      trend: "",
      icon: (
        <ClassOutlinedIcon
          className=" text-accent-info"
          sx={{ fontSize: "40px" }}
        />
      ),
    },
    {
      title: "Attendance Rate",
      value: `${attendanceRate.toFixed(2)}%`,
      trend: "",
      icon: (
        <InsertChartOutlinedIcon
          className=" text-accent-success"
          sx={{ fontSize: "40px" }}
        />
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.title} stat={stat} />
      ))}
    </div>
  );
};

AttendanceSummary.propTypes = {
  totalClasses: PropTypes.number.isRequired,
  absenceDates: PropTypes.array.isRequired,
};

export default AttendanceSummary;
