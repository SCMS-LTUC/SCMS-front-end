import { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Divider,
  IconButton,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditAnnouncementDialog from "./EditAnnouncementDialog"; // Import the dialog component

const formatDate = (dateString) => {
  if (!dateString) return { date: "N/A", time: "N/A" };

  const date = new Date(dateString);
  const toDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const toTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return { date: toDate, time: toTime };
};

export default function AnnouncementCard({ title, createdAt, type, content }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleEditClick = () => {
    setEditDialogOpen(true);
  };

  const handleDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleSave = (updatedAnnouncement) => {
    // Handle save logic here
    console.log(updatedAnnouncement);
  };

  return (
    <Card
      className={`container !bg-neutral-surface !rounded-xl !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !p-4 !border-l-4 ${
        type === "Important"
          ? "!border-l-accent-error"
          : type === "Notice"
            ? "!border-l-accent-warning"
            : "!border-l-accent-info"
      }`}
    >
      <CardContent className="!h-full !justify-between !pb-4">
        <div id="title" className="space-y-2">
          <Typography className="flex justify-between !text-neutral-textPrimary !font-bold !text-2xl">
            {title}
            <div id="actions" className="!space-x-3">
              <IconButton
                className="hover:!bg-neutral-background"
                onClick={handleEditClick}
              >
                <EditOutlinedIcon
                  sx={{ fontSize: "28px" }}
                  className="!text-accent-warning"
                />
              </IconButton>
              <IconButton className="hover:!bg-neutral-background">
                <DeleteOutlineOutlinedIcon
                  sx={{ fontSize: "28px" }}
                  className="!text-accent-error"
                />
              </IconButton>
            </div>
          </Typography>
          <Typography className="!text-neutral-textSecondary !text-sm">
            {showFullDescription ? content : `${content.substring(0, 100)}...`}
          </Typography>
          {content.length > 100 && (
            <Button
              onClick={toggleDescription}
              className="!text-primary !text-xs"
            >
              {showFullDescription ? "Less" : "More"}
            </Button>
          )}
        </div>
        <Divider className="!my-4 !w-full" />
        <div id="details" className="flex justify-start items-center">
          <Chip
            icon={
              <CalendarTodayIcon className="!text-neutral-textSecondary " />
            }
            label={`${formatDate ? formatDate(createdAt).date : "N/A"}`}
            className="!bg-neutral-surface !text-neutral-textSecondary !border !border-neutral-border !text-base"
          />
          <Chip
            icon={<AccessTimeIcon className="!text-neutral-textSecondary " />}
            label={`${formatDate ? formatDate(createdAt).time : "N/A"}`}
            className="!bg-neutral-surface !text-neutral-textSecondary !border !border-neutral-border !text-base"
          />
        </div>
      </CardContent>
      <EditAnnouncementDialog
        open={editDialogOpen}
        onClose={handleDialogClose}
        announcement={{ title, content, type }}
        onSave={handleSave}
      />
    </Card>
  );
}

AnnouncementCard.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
