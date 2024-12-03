import { useState } from "react";
import { Typography, Divider, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AnnouncementCard from "../../../Components/Teacher/AdminAnnouncement/AnnouncementCard";
//import { announcements } from "../../../Logic/Student/Data";
import { useStudentAnnouncements } from "../../../Logic/Student/useAnnouncements";

export default function AdminAnnouncementList() {
  const [visibleAssignments, setVisibleAssignments] = useState(5);
  const { announcements  } = useStudentAnnouncements();

  const loadMoreAssignments = () => {
    setVisibleAssignments((prev) => prev + 5);
  };

  return (
    <div className="">
      <Card className="!p-4  !h-auto container !mx-auto !bg-neutral-surface !rounded-lg !shadow-md !shadow-neutral-border !border-2 !border-neutral-border">
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
