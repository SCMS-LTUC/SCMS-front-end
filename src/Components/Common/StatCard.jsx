import { Card, CardContent } from "@mui/material";
import PropTypes from "prop-types";
export default function StatCard({ stat }) {
  return (
    <Card
      key={stat.title}
      className=" transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-base text-neutral-textSecondary">{stat.title}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm text-neutral-textSecondary">{stat.trend}</p>
          </div>
          <div className="p-2">{stat.icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}
StatCard.propTypes = {
  stat: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
    trend: PropTypes.string,
    icon: PropTypes.element,
  }),
};
