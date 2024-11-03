import PropTypes from "prop-types";
import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
  // FormLabel,
} from "@mui/material";

export default function EditAssignmentForm({ assignment }) {
  const [formData, setFormData] = useState({
    name: assignment.name,
    due: assignment.due,
    description: assignment.description,
    mark: assignment.mark,
    visible: assignment.visible || false,
  });

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
      <Typography variant="h4" className="mb-4 text-primary font-bold">
        Edit Assignment
      </Typography>
      <Box className="mb-4">
        <TextField
          label="Assignment Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          className="!mb-4"
        />
      </Box>
      <Box className="mb-4">
        <TextField
          label="Due Date"
          name="due"
          type="date"
          value={formData.due}
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
      <Box className="flex justify-end">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="!bg-primary !text-white !px-6 !py-2 !rounded-md"
        >
          Save Changes
        </Button>
      </Box>
    </form>
  );
}

EditAssignmentForm.propTypes = {
  assignment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    due: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mark: PropTypes.number.isRequired,
    visible: PropTypes.bool, // Ensure this is bool
  }).isRequired,
};
