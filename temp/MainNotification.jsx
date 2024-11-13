import { useState } from "react";
import NotificationSnackbar from "../src/Components/Common/NotificationDialog";

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
    <div>
      <button
        onClick={() =>
          handleOpenSnackbar("This is a success message", "success")
        }
        className="bg-green-500 text-white p-2 m-2"
      >
        Show Success
      </button>
      <button
        onClick={() => handleOpenSnackbar("This is an error message", "error")}
        className="bg-red-500 text-white p-2 m-2"
      >
        Show Error
      </button>

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
