// import { useState } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import { Link } from "react-router-dom";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useEffect } from "react";
import { useState } from "react";

export default function CalendarView() {
  const Location = useLocation();
  const Navigate = useNavigate();
  const [value, setValue] = useState("calendar");
  useEffect(() => {
    if (location.pathname.includes("summary")) {
      setValue("summary");
    } else {
      setValue("calendar");
    }
  }, [Location.pathname]);
  function handleButtonChange(event, newValue) {
    if (newValue !== null) {
      setValue(newValue);
      if (newValue === "summary") {
        Navigate("/course-details/:courseName/attendance/summary");
      } else {
        Navigate("/course-details/:courseName/attendance/");
      }
    }
  }
  return (
    <div className="space-y-8">
      {Location.pathname === "/course-details/:courseName/attendance/" ||
      Location.pathname.includes("summary") ? (
        <div className="flex justify-end">
          <ToggleButtonGroup
            value={value}
            color="secondary"
            exclusive
            onChange={handleButtonChange}
          >
            <ToggleButton
              value="calendar"
              className={
                value === "calendar"
                  ? ""
                  : "text-neutral-textSecondary hover:!bg-neutral-background"
              }
            >
              Calendar
            </ToggleButton>
            <ToggleButton
              value="summary"
              className={
                value === "summary"
                  ? ""
                  : "text-neutral-textSecondary hover:!bg-neutral-background"
              }
            >
              Summary
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      ) : (
        <></>
      )}

      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
