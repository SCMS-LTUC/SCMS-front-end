import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAnnouncements } from "../../../Logic/Teacher/useAnnouncements";
import { Typography, Divider, Button, TablePagination } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AnnouncementCard from "../../../Components/Teacher/CourseAnnouncement/AnnouncementCard";
import NewAnnouncementDialog from "../../../Components/Teacher/CourseAnnouncement/NewAnnouncementDialog";
export default function AnnouncementList() {
  const { courseId } = useParams();
  const { announcements, status, error, addAnnouncement } = useAnnouncements(courseId);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [newDialogOpen, setNewDialogOpen] = useState(false);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  //handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //new announcements dialog
  const handleNewDialogOpen = () => {
    setNewDialogOpen(true);
  };
  const handleNewDialogClose = () => {
    setNewDialogOpen(false);
  };
  const handleSaveNewAnnouncement = (newAnnouncement) => {
    addAnnouncement(newAnnouncement);
    console.log(newAnnouncement);
  };

  return (
    <div className="flex flex-col justify-between !p-8">
      <div className="container space-y-6 !mx-auto">
        <div className="flex justify-between">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Announcements
          </Typography>
          <div className="!flex !justify-end">
            <Button
              color="secondary"
              onClick={handleNewDialogOpen}
              className="!text-neutral-surface"
              variant="contained"
              startIcon={<AddIcon />}
            >
              Create
            </Button>
          </div>
        </div>
        <Divider className="!my-4" />
        <div>
          <div className="flex flex-col justify-start space-y-6">
            {announcements
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((announcement, index) => (
                <AnnouncementCard key={index} {...announcement} />
              ))}
          </div>
        </div>
        <Divider className="!my-4" />
        <TablePagination
          component="div"
          count={announcements.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          className="!text-neutral-textPrimary"
        />
      </div>
      <NewAnnouncementDialog
        open={newDialogOpen}
        onClose={handleNewDialogClose}
        onSave={handleSaveNewAnnouncement}
      />
    </div>
  );
}
