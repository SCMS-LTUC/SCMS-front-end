import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

export default function EditAssignmentForm({ assignment }) {
  const [formData, setFormData] = useState({
    assignmentName: "",
    dueDate: "",
    description: "",
    mark: 0,
    visible: false,
  });

  useEffect(() => {
    if (assignment) {
      setFormData({
        assignmentName: assignment.assignmentName,
        dueDate: assignment.dueDate,
        description: assignment.description,
        mark: assignment.mark,
        visible: assignment.visible || false,
      });
    }
  }, [assignment]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Check the form data on submit
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-lg shadow-md"
    >
      <Typography className="mb-4 text-primary !font-bold  !text-3xl ">
        Edit Assignment
      </Typography>
      <Box className="mb-4">
        <TextField
          label="Assignment Name"
          name="assignmentName"
          value={formData.assignmentName}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          className="!mb-4"
        />
      </Box>
      <Box className="mb-4">
        <TextField
          label="Due Date"
          name="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          className="!mb-4"
        />
      </Box>
      <Box className="mb-4">
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          className="!mb-4"
        />
      </Box>
      <Box className="mb-4">
        <TextField
          label="Assignment Mark"
          name="mark"
          type="number"
          value={formData.mark}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          className="!mb-4"
        />
      </Box>
      <Box className="mb-4">
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.visible}
              onChange={handleChange}
              name="visible"
              color="primary"
            />
          }
          label="Visible"
        />
      </Box>
      <Box className="flex justify-end space-x-3">
        <Button
          type="submit"
          variant="outlined"
          color="error"
          className=" text-white !rounded-md"
        >
          Delete
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className=" !text-white  !rounded-md"
        >
          Save Changes
        </Button>
      </Box>
    </form>
  );
}

EditAssignmentForm.propTypes = {
  assignment: PropTypes.shape({
    assignmentName: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mark: PropTypes.number.isRequired,
    visible: PropTypes.bool, // Ensure this is bool
  }).isRequired,
};
