// import { useState } from 'react';

// export default function CreateAssignmentForm() {
//   const [assignment, setAssignment] = useState({
//     name: '',
//     due: '',
//     description: '',
//     mark: 0,
//   });

//   const handleChange = (e) => {
//     setAssignment({ ...assignment, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to handle form submission
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium">Assignment Name</label>
//         <input
//           type="text"
//           name="name"
//           value={assignment.name}
//           onChange={handleChange}
//           className="mt-1 block w-full border px-4 py-2 rounded-md"
//           required
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium">Due Date</label>
//         <input
//           type="date"
//           name="due"
//           value={assignment.due}
//           onChange={handleChange}
//           className="mt-1 block w-auto border px-4 py-2 rounded-md"
//           required
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium">Description</label>
//         <textarea
//           name="description"
//           value={assignment.description}
//           onChange={handleChange}
//           className="mt-1 block w-full border px-4 py-2 rounded-md"
//           rows="4"
//           required
//         ></textarea>
//       </div>
//       <div>
//         <label className="block text-sm font-medium">Assignment Mark</label>
//         <input
//           type="number"
//           name="mark"
//           value={assignment.mark}
//           onChange={handleChange}
//           className="mt-1 block w-20 border px-4 py-2 rounded-md"
//           required
//         />
//       </div>
//       <div>
//       <input
//           type="checkbox"
//           className="border px-4 mr-2"
//         />
//         <label className="text-sm font-medium">Make Assignment visible to students</label>
//       </div>
//       <div className="flex justify-end">
//         <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
//           Create Assignment
//         </button>
//       </div>
//     </form>
//   );
// }

import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

export default function CreateAssignmentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    due: "",
    description: "",
    mark: 0,
    visible: false,
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
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-lg shadow-md"
    >
      <Typography variant="h4" className="mb-4 text-primary font-bold">
        Create Assignment
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
          required
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
          required
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
          required
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
          required
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
          label="Make Assignment visible to students"
        />
      </Box>
      <Box className="flex justify-end">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="!bg-primary !text-white !px-6 !py-2 !rounded-md"
        >
          Create Assignment
        </Button>
      </Box>
    </form>
  );
}

CreateAssignmentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
