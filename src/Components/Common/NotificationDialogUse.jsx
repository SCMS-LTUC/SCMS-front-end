import { useState } from "react";
import NotificationSnackbar from "./NotificationDialog";
import { Button } from "@mui/material";
const MainNotification = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("");

  const handleOpenSnackbar = (message, type) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
    setSnackbarMessage("");
    setSnackbarType("");
  };

  return (
    <div className="space-x-3">
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          handleOpenSnackbar("This is a success message", "success")
        }
      >
        Show Success
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleOpenSnackbar("This is an error message", "error")}
      >
        Show Error
      </Button>

      <NotificationSnackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        type={snackbarType}
      />
    </div>
  );
};

export default MainNotification;
