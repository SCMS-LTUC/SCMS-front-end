import { Card, CardContent, LinearProgress } from "@mui/material";
import PropTypes from "prop-types";

export default function StatCard({ stat }) {
  // Calculate progress based on the value; if not a percentage, default to full
  const progressValue = parseInt(stat.value.replace("%", ""), 10);
  const progress = stat.value.includes("%") ? progressValue : 100;

  return (
    <Card
      key={stat.title}
      className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg relative"
    >
      <CardContent className="pt-6 pb-14">
        {" "}
        {/* Added padding at bottom for space */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-base text-neutral-textSecondary">{stat.title}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm text-neutral-textSecondary">{stat.trend}</p>
          </div>
          <div className="p-2">{stat.icon}</div>
        </div>
      </CardContent>

      {/* Progress Bar at the bottom */}
      <LinearProgress
        variant="determinate"
        value={progress}
        className={`absolute bottom-0 left-0 right-0 h-2 rounded-b-lg`}
        color={stat.value.includes("%") ? "success" : "info"}
      />
    </Card>
  );
}

StatCard.propTypes = {
  stat: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string, // Example: "92%"
    trend: PropTypes.string,
    icon: PropTypes.element,
  }),
};
