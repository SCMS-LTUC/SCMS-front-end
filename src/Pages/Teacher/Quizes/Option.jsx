import { TextField } from '@mui/material';

const Option = ({ index, value, onChange }) => {
    return (
        <div className="mb-4" >
            <TextField label={`Option ${index + 1}`} value={value} onChange={(e) => onChange(e.target.value)} fullWidth required />
        </div>

    );
};

export default Option;
