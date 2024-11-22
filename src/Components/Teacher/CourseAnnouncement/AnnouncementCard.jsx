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
import EditAnnouncementDialog from "./EditAnnouncementDialog";
import ConfirmDeleteDialog from "../../../Components/Common/ConfirmDeleteDialog";
import { useAnnouncements } from "../../../Logic/Teacher/useAnnouncements";

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

export default function AnnouncementCard({
  announcementId,
  title,
  createdAt,
  type,
  content,
}) {
  const [announcementData, setAnnouncementData] = useState({
    title,
    content,
    type,
    createdAt,
  });
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { updateAnnouncement, removeAnnouncement } = useAnnouncements();

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Edit dialog handlers
  const handleEditClick = () => {
    setEditDialogOpen(true);
  };
  const handleDialogClose = () => {
    setEditDialogOpen(false);
  };
  const handleSave = (updatedAnnouncement) => {
    updateAnnouncement(announcementId, updatedAnnouncement);
    setAnnouncementData((prevData) => ({
      ...prevData,
      ...updatedAnnouncement,
    }));
    handleDialogClose();
  };

  // Delete dialog handlers
  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };
  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };
  const handleConfirmDelete = () => {
    removeAnnouncement(announcementId);
    setIsVisible(false);
    handleDeleteDialogClose();
  };

  if (!isVisible) return null;

  return (
    <Card
      className={`container !bg-neutral-surface !rounded-lg !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !p-4 !border-l-4 ${
        announcementData.type === "Important"
          ? "!border-l-accent-error"
          : announcementData.type === "Notice"
          ? "!border-l-accent-warning"
          : "!border-l-accent-info"
      }`}
    >
      <CardContent className="!h-full !justify-between !pb-4">
        <div id="title" className="space-y-2">
          <Typography className="flex justify-between !text-neutral-textPrimary !font-bold !text-2xl">
            {announcementData.title}
            <div id="actions" className="!space-x-3">
              <IconButton
                className="hover:!bg-neutral-background transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                onClick={handleEditClick}
              >
                <EditOutlinedIcon
                  sx={{ fontSize: "30px" }}
                  className="text-accent-warning"
                />
              </IconButton>
              <IconButton
                className="hover:!bg-neutral-background transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                onClick={handleDeleteDialogOpen}
              >
                <DeleteOutlineOutlinedIcon
                  sx={{ fontSize: "30px" }}
                  className="text-accent-error"
                />
              </IconButton>
            </div>
          </Typography>
          <Typography className="!text-neutral-textSecondary !text-sm">
            {showFullDescription
              ? announcementData.content
              : `${announcementData.content.substring(0, 200)}...`}
          </Typography>
          {announcementData.content.length > 100 && (
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
            icon={<CalendarTodayIcon className="!text-neutral-textSecondary " />}
            label={`${
              formatDate ? formatDate(announcementData.createdAt).date : "N/A"
            }`}
            className="!bg-neutral-surface !text-neutral-textSecondary !border !border-neutral-border !text-base"
          />
          <Chip
            icon={<AccessTimeIcon className="!text-neutral-textSecondary " />}
            label={`${
              formatDate ? formatDate(announcementData.createdAt).time : "N/A"
            }`}
            className="!bg-neutral-surface !text-neutral-textSecondary !border !border-neutral-border !text-base"
          />
        </div>
      </CardContent>
      <EditAnnouncementDialog
        open={editDialogOpen}
        onClose={handleDialogClose}
        announcement={announcementData}
        onSave={handleSave}
      />
      <ConfirmDeleteDialog
        open={deleteDialogOpen}
        onClose={handleDeleteDialogClose}
        onConfirm={handleConfirmDelete}
        title="Delete Announcement"
        message="Are you sure you want to delete this announcement?"
      />
    </Card>
  );
}

AnnouncementCard.propTypes = {
  announcementId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
