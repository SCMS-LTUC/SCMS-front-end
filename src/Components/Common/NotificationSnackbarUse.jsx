import { useDispatch, useSelector } from "react-redux";
import { showSnackbar, hideSnackbar } from "../../Redux/SnackbarSlice";
import NotificationSnackbar from "./NotificationSnackbar";
import { Button } from "@mui/material";

const MainNotification = () => {
  const dispatch = useDispatch();
  const { open, message, type } = useSelector((state) => state.snackbar);

  const handleOpenSnackbar = (message, type) => {
    dispatch(showSnackbar({ message, type }));
  };

  const handleCloseSnackbar = () => {
    dispatch(hideSnackbar());
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
        open={open}
        onClose={handleCloseSnackbar}
        message={message}
        type={type}
      />
    </div>
  );
};

export default MainNotification;
