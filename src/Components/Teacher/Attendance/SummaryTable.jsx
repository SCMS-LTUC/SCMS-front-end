import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import PropTypes from "prop-types";

const SummaryDialog = ({ rows, open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      classes={{
        paper: "!rounded-xl border-2 border-neutral-textSecondary",
      }}
    >
      <DialogTitle className="!pb-0">
        <h1 className="!font-bold !text-3xl !text-neutral-textMedium">
          Attendance Summary
        </h1>
      </DialogTitle>

      <DialogContent className="!p-6">
        <Paper className="!border-2 !border-neutral-border !shadow-md !shadow-neutral-border !rounded-xl">
          <TableContainer className="!max-h-[450px]">
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell className="!text-primary !font-bold !bg-neutral-background !text-xl !w-3/5">
                    Student Name
                  </TableCell>
                  <TableCell
                    className="!text-primary !font-bold !bg-neutral-background !mx-auto !text-xl !w-2/5"
                    align="center"
                  >
                    Absence Rate
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.studentID}
                    hover
                    className="hover:!bg-neutral-background"
                  >
                    <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg !w-3/5">
                      {row.fullName}
                    </TableCell>
                    <TableCell
                      className="!text-neutral-textMedium !bg-neutral-surface !text-lg !w-2/5"
                      align="center"
                    >
                      {row.absenceRateForTheStudent}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </DialogContent>

      <DialogActions className="!bg-neutral-background !p-4 !border-t-2 !border-neutral-border">
        <Button
          onClick={onClose}
          variant="contained"
          color="secondary"
          className="!text-neutral-surface"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

SummaryDialog.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      studentID: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      absenceRateForTheStudent: PropTypes.string.isRequired,
    })
  ).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SummaryDialog;
