import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useUpdateAssignment } from "../../../Logic/Teacher/useAssignment";
import {
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

// const formatDate = (dateString) => {
//   if (!dateString) return "N/A";
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   });
// };

export default function EditAssignmentForm({ assignment }) {
  const { courseId } = useParams();
  const { editAssignment } = useUpdateAssignment();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    assignmentName: "",
    dueDate: "",
    description: "",
    fullMark: 0,
    visible: false,
  });

  console.log(assignment);
  useEffect(() => {
    if (assignment) {
      setFormData({
        assignmentName: assignment.assignmentName,
        dueDate: assignment.dueDate,
        description: assignment.description,
        fullMark: assignment.fullMark,
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
    console.log("form data:",formData); // Check the form data on submit
    // Handle form submission logic here
    editAssignment(assignment.assignmentId, formData);
    navigate(`/course-details/${courseId}/assignments`);
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
          type="datetime-local"
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
          name="fullMark"
          type="number"
          value={formData.fullMark}
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
    assignmentId: PropTypes.number.isRequired,
    assignmentName: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fullMark: PropTypes.number.isRequired,
    visible: PropTypes.bool, // Ensure this is bool
  }).isRequired,
};
