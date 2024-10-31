import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function CalendarView() {
  const [value, setValue] = useState(() => {
    return localStorage.getItem("attendanceTabs") || "one";
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("attendanceTabs", newValue);
  };
  return (
    <div className="flex flex-col justify-between space-y-10">
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          className="!text-neutral-textSecondary"
        >
          <Tab
            value="one"
            label="Calender"
            component={Link}
            to="/attendance/"
          />
          <Tab
            value="two"
            label="Summary"
            component={Link}
            to="/attendance/summary"
          />
        </Tabs>
      </Box>
      <Outlet />
    </div>
  );
}
