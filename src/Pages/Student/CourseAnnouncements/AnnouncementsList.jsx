import { useParams } from "react-router-dom";
import { useState } from "react";
import { Typography, Divider, Button } from "@mui/material";
import AnnouncementCard from "../../../Components/Student/CourseAnnouncements/AnnouncementCard";
export default function AnnouncementList() {
  const [visibleAssignments, setVisibleAssignments] = useState(5);
  const { courseId } = useParams();

  console.log(courseId);
  const loadMoreAssignments = () => {
    setVisibleAssignments((prev) => prev + 5);
  };

  const announcements = [
    {
      title: "Announcement 1",
      createdAt: "2024-11-10T21:09:02.814Z",
      type: "Important",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      userName: "Dr. John Doe",
    },
    {
      title: "Announcement 2",
      createdAt: "2024-11-10T21:09:02.814Z",
      type: "Notice",
      content: "Description for Announcement 2",
      userName: "Dr. John Doe",
    },
    {
      title: "Announcement 3",
      createdAt: "2024-11-10T21:09:02.814Z",
      type: "Info",
      content: "Description for Announcement 2",
      userName: "Dr. John Doe",
    },
  ];

  return (
    <div className="flex flex-col justify-between !p-8">
      <div className="container space-y-6 !mx-auto">
        <div className="flex justify-between">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Latest Posts
          </Typography>
        </div>
        <Divider className="!my-4" />
        <div>
          <div className="flex flex-col justify-start space-y-6">
            {announcements
              .slice(0, visibleAssignments)
              .map((announcement, index) => (
                <AnnouncementCard key={index} {...announcement} />
              ))}
          </div>
        </div>
        <Divider className="!my-4" />
        <div className="flex justify-end">
          {visibleAssignments < announcements.length && (
            <Button
              variant="outlined"
              color="primary"
              onClick={loadMoreAssignments}
            >
              Load More
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
