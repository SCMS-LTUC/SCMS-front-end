// import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

export default function ConfirmDeleteDialog({
  open,
  onClose,
  onConfirm,
  title,
  message,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      classes={{
        paper: "border-2 border-neutral-textSecondary ",
      }}
    >
      <DialogTitle>{title || "Confirm Delete"}</DialogTitle>
      <DialogContent>
        <DialogContentText className="!text-neutral-textMedium">
          {message || "Are you sure you want to delete this item?"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} className="!text-neutral-textMedium">
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          color="error"
          variant="contained"
          className="!text-neutral-surface"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmDeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
};
