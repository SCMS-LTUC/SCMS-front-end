import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Box,
  Typography,
  // Chip,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import PropsTypes from "prop-types";

const CollapsibleTable = ({ data }) => {
  const [openRows, setOpenRows] = useState({});

  // Toggle collapse state for a row
  const handleToggle = (category) => {
    setOpenRows((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <TableContainer
      component={Paper}
      className="!border-2 !border-neutral-border !shadow-md !shadow-neutral-border !rounded-lg"
    >
      <Table stickyHeader aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell className="!bg-neutral-background " />
            <TableCell className="!text-primary-dark !font-bold !bg-neutral-background !text-xl">
              Category
            </TableCell>
            <TableCell
              align="center"
              className="!text-primary-dark !font-bold !bg-neutral-background !text-xl"
            >
              Overall Grade
            </TableCell>
            <TableCell
              align="center"
              className="!text-primary-dark !font-bold !bg-neutral-background !text-xl"
            >
              Weight
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <React.Fragment key={row.category}>
              {/* Collapsible Row */}
              <TableRow hover className="hover:!bg-white">
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleToggle(row.category)}
                  >
                    {openRows[row.category] ? (
                      <KeyboardArrowUp />
                    ) : (
                      <KeyboardArrowDown />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell className="!text-neutral-textPrimary !font-medium !bg-neutral-surface !text-lg">
                  {row.category}
                </TableCell>
                <TableCell
                  align="center"
                  className="!text-neutral-textMedium !bg-neutral-surface !text-lg"
                >
                  {row.overallGrade}
                </TableCell>
                <TableCell
                  align="center"
                  className="!text-neutral-textMedium !bg-neutral-surface !text-lg"
                >
                  {row.weight}
                </TableCell>
              </TableRow>

              {/* Expanded Details */}
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={4}
                >
                  <Collapse
                    in={openRows[row.category] || false}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Box margin={1}>
                      <Typography variant="h6" gutterBottom>
                        Details
                      </Typography>
                      <Table size="small" aria-label="details">
                        <TableHead>
                          <TableRow>
                            <TableCell className="!text-base">
                              <strong>Name</strong>
                            </TableCell>
                            <TableCell align="center" className="!text-base">
                              <strong>Grade</strong>
                            </TableCell>
                            <TableCell align="center" className="!text-base">
                              <strong>Achieved Weight</strong>
                            </TableCell>
                            <TableCell align="center" className="!text-base">
                              <strong>Weight</strong>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {row.items?.map((item) => (
                            <TableRow
                              key={item.name}
                              className="hover:!bg-neutral-background"
                            >
                              <TableCell className="!text-neutral-textMedium !bg-neutral-surface !text-base">
                                {item.name}
                              </TableCell>
                              <TableCell
                                align="center"
                                className="!text-neutral-textMedium !bg-neutral-surface !text-base"
                              >
                                {item.grade}
                              </TableCell>
                              <TableCell
                                align="center"
                                className="!text-neutral-textMedium !bg-neutral-surface !text-base"
                              >
                                {item.achievedWeight}
                              </TableCell>
                              <TableCell
                                align="center"
                                className="!text-neutral-textMedium !bg-neutral-surface !text-base"
                              >
                                {item.weight}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
CollapsibleTable.propTypes = {
  data: PropsTypes.array.isRequired,
};
