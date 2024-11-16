import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AssignmentCard({
  name,
  due,
  submissions,
  description,
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card className="container !bg-neutral-surface !rounded-lg !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !p-4">
      <CardContent className="flex flex-col !h-full !justify-between !pb-4">
        <div id="title" className="space-y-2">
          <Typography className="!text-neutral-textPrimary !font-bold !text-2xl">
            {name}
          </Typography>
          <Typography className="!text-neutral-textSecondary !text-sm">
            {showFullDescription
              ? description
              : `${description.substring(0, 100)}...`}
          </Typography>
          {description.length > 100 && (
            <Button
              onClick={toggleDescription}
              className="!text-primary !text-xs"
            >
              {showFullDescription ? "Less" : "More"}
            </Button>
          )}
        </div>
        <Divider className="!my-4" />
        <div id="details" className="flex justify-between items-center">
          <Chip
            icon={<CalendarTodayIcon className="!text-neutral-textMedium" />}
            label={`Due: ${due}`}
            className="!bg-neutral-background !text-accent-error !border !border-neutral-border !text-base"
          />
          <Chip
            icon={
              <AssignmentTurnedInIcon className="!text-neutral-textMedium" />
            }
            label={`Submissions: ${submissions}`}
            className="!bg-neutral-background !text-accent-success !border !border-neutral-border !text-base"
          />
        </div>
        <Divider className="!my-4" />
        <div className="flex justify-end space-x-3">
          <Button
            variant="contained"
            color="primary"
            className="!text-neutral-surface"
            onClick={() =>
              navigate(
                "/course-details/:courseName/assignments/:assignmentId/submissions"
              )
            }
          >
            View Submissions
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="!text-primary !border-primary"
            onClick={() =>
              navigate(
                "/course-details/:courseName/assignments/:assignmentId/edit"
              )
            }
          >
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

AssignmentCard.propTypes = {
  name: PropTypes.string.isRequired, // name should be a required string
  due: PropTypes.string.isRequired, // due should be a required string
  submissions: PropTypes.number.isRequired, // submissions should be a required number
  description: PropTypes.string.isRequired, // description should be a required string
};
