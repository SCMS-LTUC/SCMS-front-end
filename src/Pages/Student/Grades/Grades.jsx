import GradesTable from "../../../Components/Student/Grades/GradesTable";
import OverallGradeCard from "../../../Components/Student/Grades/OverallGradeCard";
import { Typography, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGrades } from "../../../Logic/Student/useGrades";

const convertDataFormat = (data) => {
  // Calculate the course full mark
  const courseFullMark =
    data.assignments.reduce((sum, item) => sum + item.fullMark, 0) +
    data.quizzes.reduce((sum, item) => sum + item.fullMark, 0);

  const calculateWeight = (mark) =>
    ((mark / courseFullMark) * 100).toFixed(2) + "%";

  const convertItems = (items) => {
    return items.map((item) => ({
      name: item.title,
      grade: `${item.achievedMark}/${item.fullMark}`,
      weight: calculateWeight(item.fullMark),
      achievedWeight: calculateWeight(item.achievedMark),
    }));
  };

  const calculateOverallAchievedWeight = (items) => {
    const totalAchievedMarks = items.reduce(
      (sum, item) => sum + item.achievedMark,
      0
    );
    return calculateWeight(totalAchievedMarks);
  };

  const assignments = {
    category: "Assignments",
    overallGrade: calculateOverallAchievedWeight(data.assignments),
    weight: calculateWeight(
      data.assignments.reduce((sum, item) => sum + item.fullMark, 0)
    ),
    items: convertItems(data.assignments),
  };

  const quizzes = {
    category: "Quizzes",
    overallGrade: calculateOverallAchievedWeight(data.quizzes),
    weight: calculateWeight(
      data.quizzes.reduce((sum, item) => sum + item.fullMark, 0)
    ),
    items: convertItems(data.quizzes),
  };

  return [assignments, quizzes];
};

export default function Grades() {
  const { courseId } = useParams();
  const {studentGrades, status, error } = useGrades(courseId);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (!studentGrades) {
    return null;
  }

  const convertedData = convertDataFormat(studentGrades);

  return (
    <div className="flex flex-col justify-between !p-8">
      <div className="container space-y-6 !mx-auto">
        <div className="flex justify-between">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Grades
          </Typography>
        </div>
        <Divider className="!my-4" />
        <div>
          <OverallGradeCard overallGrade={studentGrades.overallGrade} />
        </div>

        <div className="flex flex-col justify-start space-y-6">
          <GradesTable data={convertedData} />
        </div>

        <Divider className="!my-4" />
      </div>
    </div>
  );
}