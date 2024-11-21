import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import PropTypes from "prop-types";

export default function AssignmentLayout({ children }) {
  const Navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between space-y-6">
      <div>
        <Button
          onClick={() => Navigate(`/course-details/:courseName/assignments/`)}
          cclassName="!text-secondary !text-base  hover:!bg-secondary-lighter hover:!text-neutral-surface !transition-all !duration-300 !rounded-full"
          variant="text"
          startIcon={<ArrowBackOutlinedIcon />}
        >
          Back to Assignments
        </Button>
      </div>

      <div className="container space-y-6 !mx-auto ">{children}</div>
    </div>
  );
}
AssignmentLayout.propTypes = {
  children: PropTypes.node,
};
