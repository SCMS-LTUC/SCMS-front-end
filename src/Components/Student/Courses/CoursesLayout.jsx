import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useEffect } from "react";
import { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
export default function CoursesLayout() {
  const Location = useLocation();
  const Navigate = useNavigate();
  const [value, setValue] = useState("");
  useEffect(() => {
    if (location.pathname.includes("completed")) {
      setValue("completed");
    } else {
      setValue("current");
    }
  }, [Location.pathname]);
  function handleButtonChange(event, newValue) {
    if (newValue !== null) {
      setValue(newValue);
      if (newValue === "completed") {
        Navigate("/completed");
      } else {
        Navigate("/");
      }
    }
  }
  return (
    <div className="">
      <div className="flex ">
        <ToggleButtonGroup
          value={value}
          color="toggleButton"
          exclusive
          onChange={handleButtonChange}
          className="!font-bold"
        >
          <ToggleButton
            value="current"
            className={
              value === "current"
                ? ""
                : "!text-neutral-textSecondary !bg-neutral-surface"
            }
          >
            <div className="flex items-center gap-2 !text-base">
              <AccessTimeIcon />
              <h1>Current Courses</h1>
            </div>
          </ToggleButton>
          <ToggleButton
            value="completed"
            className={
              value === "completed"
                ? ""
                : "!text-neutral-textSecondary !bg-neutral-surface"
            }
          >
            <div className="flex items-center gap-2 !text-base">
              <DoneOutlinedIcon />
              <h1>Completed Courses</h1>
            </div>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="!p-8">
        <Outlet />
      </div>
    </div>
  );
}
