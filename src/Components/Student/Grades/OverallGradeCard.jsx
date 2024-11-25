import PropTypes from "prop-types";
import { Card, CardContent, LinearProgress } from "@mui/material";

const OverallGradeCard = ({ overallGrade }) => {
  return (
    <Card
      // key={stat.title}
      className=" transition-all duration-200 hover:-translate-y-1 hover:shadow-lg !border-2 !border-neutral-border  !rounded-lg"
    >
      <CardContent className="pt-6 space-y-6">
        <div className="flex justify-between items-start ">
          <h1 className="text-2xl font-semibold">Overall Grade</h1>
          <p className="text-2xl font-semibold">{overallGrade}%</p>
        </div>
        <div className="mt-6">
          <LinearProgress
            variant="determinate"
            value={parseInt(overallGrade)}
            // className="h-6 rounded-full"
            className="mt-2 rounded-lg !h-1.5 !font-medium"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default OverallGradeCard;
OverallGradeCard.propTypes = {
  overallGrade: PropTypes.string.isRequired,
};
