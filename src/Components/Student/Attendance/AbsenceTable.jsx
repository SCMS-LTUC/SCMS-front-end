import PropTypes from "prop-types";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";

const AbsenceTable = ({ absenceDates }) => {
  return (
    <Paper className="!border-2 !border-neutral-border !shadow-md !shadow-neutral-border !rounded-lg">
      <TableContainer className="!max-h-[450px]">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className="!text-primary-dark !font-bold !bg-neutral-background !text-xl">
                Date
              </TableCell>
              <TableCell className="!text-primary-dark !font-bold !bg-neutral-background !text-xl">
                Time
              </TableCell>
              <TableCell className="!text-primary-dark !font-bold !bg-neutral-background !text-xl">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {absenceDates.map((record, index) => {
              const date = new Date(record.lectureDate);
              return (
                <TableRow
                  key={index}
                  hover
                  className="hover:!bg-neutral-background"
                >
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {date.toLocaleDateString()}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    {date.toLocaleTimeString()}
                  </TableCell>
                  <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-lg">
                    <Chip
                      label="Absent"
                      className="!bg-red-100 !text-red-700 !text-base"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

AbsenceTable.propTypes = {
  absenceDates: PropTypes.array.isRequired,
};

export default AbsenceTable;
