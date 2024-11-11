import { useState } from "react";
import { Typography, Divider, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AnnouncementCard from "../../../Components/Teacher/AdminAnnouncement/AnnouncementCard";

export default function AdminAnnouncementList() {
  const [visibleAssignments, setVisibleAssignments] = useState(5);

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
    },
    {
      title: "Announcement 2",
      createdAt: "2024-11-10T21:09:02.814Z",
      type: "Notice",
      content: "Description for Announcement 2",
    },
    {
      title: "Announcement 3",
      createdAt: "2024-11-10T21:09:02.814Z",
      type: "Info",
      content: "Description for Announcement 2",
    },
  ];

  return (
    <div className="p-6">
      <Card className="!p-4 !w-4/6 !h-auto container !mx-auto !bg-neutral-surface !rounded-xl !shadow-md !shadow-neutral-border !border-2 !border-neutral-border !mb-10">
        <CardContent>
          <div className="">
            <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
              Latest Posts
            </Typography>
          </div>
        </CardContent>

        <Divider className="!mb-4" />

        <CardContent>
          <div>
            <div className="flex flex-col justify-start space-y-6">
              {announcements
                .slice(0, visibleAssignments)
                .map((announcment, index) => (
                  <AnnouncementCard key={index} {...announcment} />
                ))}
            </div>
          </div>
        </CardContent>

        <Divider className="!my-4" />

        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
}
