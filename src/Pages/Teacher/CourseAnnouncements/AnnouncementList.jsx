import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourseAnnouncements } from '../../../Redux/announcementsSlice';
import { Typography, Divider, Button, TablePagination } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AnnouncementCard from "../../../Components/Teacher/CourseAnnouncement/AnnouncementCard";
import NewAnnouncementDialog from "../../../Components/Teacher/CourseAnnouncement/NewAnnouncementDialog";

export default function AnnouncementList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const { announcements, status, error } = useSelector((state) => state.announcements);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourseAnnouncements(courseId));
    }
  }, [status, dispatch, courseId]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [newDialogOpen, setNewDialogOpen] = useState(false);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  // const announcements = [
  //   {
  //     title: "Announcement 1",
  //     createdAt: "2024-11-10T21:09:02.814Z",
  //     type: "Important",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   },
  //   {
  //     title: "Announcement 2",
  //     createdAt: "2024-11-10T21:09:02.814Z",
  //     type: "Notice",
  //     content: "Description for Announcement 2",
  //   },
  //   {
  //     title: "Announcement 3",
  //     createdAt: "2024-11-10T21:09:02.814Z",
  //     type: "Info",
  //     content: "Description for Announcement 2",
  //   },
  // ];

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
    // Handle save logic here
    console.log(newAnnouncement);
  };

  return (
    <div className="flex flex-col justify-between space-y-8">
      <div className="!flex !justify-end">
        <Button
          color="primary"
          onClick={handleNewDialogOpen}
          className="!text-neutral-surface"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Create
        </Button>
      </div>
      <div className="container space-y-6 !mx-auto">
        <div className="">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Announcements
          </Typography>
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
