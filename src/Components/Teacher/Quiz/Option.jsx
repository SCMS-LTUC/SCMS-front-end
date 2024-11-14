import { TextField, IconButton } from "@mui/material";
// import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from "@mui/icons-material/Clear";

import PropTypes from "prop-types";

const Option = ({ index, value, onChange, onRemove }) => {
  return (
    <div className="flex items-center mb-2">
      <TextField
        label={`Option ${index + 1}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
        required
      />
      <IconButton onClick={onRemove} aria-label="Delete Option">
        <ClearIcon className="!text-accent-error" />
      </IconButton>
    </div>
  );
};

Option.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Option;
