import { useState } from "react";
import { Card, Tabs, Tab, Box, Typography, CardContent } from "@mui/material";

function NestedTabExample() {
  const [mainTab, setMainTab] = useState(0);
  const [nestedTab, setNestedTab] = useState(0);

  const handleMainTabChange = (event, newValue) => {
    setMainTab(newValue);
    setNestedTab(0); // Reset nested tab when switching main tabs
  };

  const handleNestedTabChange = (event, newValue) => {
    setNestedTab(newValue);
  };

  return (
    <Card variant="outlined">
      <Tabs value={mainTab} onChange={handleMainTabChange}>
        <Tab label="Main Tab 1" />
        <Tab label="Main Tab 2" />
      </Tabs>
      <CardContent>
        {mainTab === 0 && (
          <Box>
            <Typography variant="h6">Main Tab 1 Content</Typography>
            <Tabs value={nestedTab} onChange={handleNestedTabChange}>
              <Tab label="Nested Tab 1" />
              <Tab label="Nested Tab 2" />
            </Tabs>
            {nestedTab === 0 && (
              <Typography>Content for Nested Tab 1</Typography>
            )}
            {nestedTab === 1 && (
              <Typography>Content for Nested Tab 2</Typography>
            )}
          </Box>
        )}

        {mainTab === 1 && (
          <Box>
            <Typography variant="h6">Main Tab 2 Content</Typography>
            <Tabs value={nestedTab} onChange={handleNestedTabChange}>
              <Tab label="Nested Tab A" />
              <Tab label="Nested Tab B" />
            </Tabs>
            {nestedTab === 0 && (
              <Typography>Content for Nested Tab A</Typography>
            )}
            {nestedTab === 1 && (
              <Typography>Content for Nested Tab B</Typography>
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default NestedTabExample;
