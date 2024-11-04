import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import PropTypes from "prop-types";

export default function AssignmentLayout({ children }) {
  const Navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between space-y-8">
      <div>
        <Button
          onClick={() => Navigate(`/course-details/:courseName/assignments/`)}
          className="!text-secondary !text-base !py-3 !px-4 space-x-2 hover:!bg-secondary-lighter hover:!text-neutral-surface transition-all"
          variant="text"
        >
          <ArrowBackOutlinedIcon />
          <h1>Back to Assignments</h1>
        </Button>
      </div>

      <div
        className="container space-y-6 !mx-auto "
        // style={{ width: "700px" }}
      >
        {children}
      </div>
    </div>
  );
}
AssignmentLayout.propTypes = {
  children: PropTypes.node,
};
