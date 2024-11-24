import GradesTable from "../../../Components/Student/Grades/GradesTable";
import { Typography, Divider } from "@mui/material";
export default function Grades() {
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
          <div className="flex flex-col justify-start space-y-6">
            <GradesTable />
          </div>
        </div>
        <Divider className="!my-4" />
      </div>
    </div>
  );
}
