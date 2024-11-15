import { Stack, Avatar, Button } from "@mui/material";
import PropTypes from "prop-types";

export default function ClasslistCard({ student, onChatOpen }) {
  return (
    <Stack className="!flex !flex-row items-center !bg-neutral-background !p-2 rounded-md !space-x-4">
      <Avatar className="!bg-primary-light" sx={{ width: 45, height: 45 }}>
        {student.studentName.charAt(0)}
      </Avatar>
      <div className="text-lg">
        <div className="text-neutral-textPrimary">
          <Button
            color="secondary"
            variant="text"
            // size="large"
            className="!p-0 !min-w-0 !normal-case hover:!underline !text-inherit hover:!text-secondary-dark !text-lg !bg-neutral-background transition-all !font-semibold"
            onClick={() => onChatOpen(student)}
          >
            {student.studentName}
          </Button>
        </div>
        <div className="text-neutral-textSecondary">
          ID: {student.studentId}
        </div>
      </div>
    </Stack>
  );
}

ClasslistCard.propTypes = {
  student: PropTypes.shape({
    studentId: PropTypes.number.isRequired,
    studentName: PropTypes.string.isRequired,
    studentUserName: PropTypes.string.isRequired,
    studentEmail: PropTypes.string.isRequired,
  }).isRequired,
  onChatOpen: PropTypes.func.isRequired,
};
