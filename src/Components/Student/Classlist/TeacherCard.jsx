import { Stack, Avatar, Button } from "@mui/material";
import PropTypes from "prop-types";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
export default function ClasslistCard({
  teacherName,
  teacherId,
  teacherDepartment,
  onChatOpen,
}) {
  console.log(teacherDepartment);
  return (
    <Stack className="!flex !flex-row items-center !bg-neutral-background !p-2 rounded-md !space-x-4">
      <Avatar className="!bg-primary-light" sx={{ width: 45, height: 45 }}>
        {teacherName.charAt(0)}
      </Avatar>
      <div className="text-lg !w-full pr-4">
        <div className="flex  justify-between  text-neutral-textPrimary">
          <Button
            color="secondary"
            variant="text"
            // size="large"
            className="!p-0 !min-w-0 !normal-case hover:!underline !text-inherit hover:!text-secondary-dark !text-lg !bg-neutral-background transition-all !font-semibold"
            onClick={() => onChatOpen(teacherId)}
          >
            {teacherName}
          </Button>
          <div className="">
            <SchoolOutlinedIcon className="!text-primary-dark" />
            {/* <h1 className="!text-lg ">Instructor</h1> */}
          </div>
        </div>
        <div className="text-neutral-textSecondary">{teacherDepartment}</div>
      </div>
    </Stack>
  );
}

ClasslistCard.propTypes = {
  teacherName: PropTypes.string.isRequired,
  teacherId: PropTypes.number.isRequired,
  teacherDepartment: PropTypes.string.isRequired,
  onChatOpen: PropTypes.func.isRequired,
};
