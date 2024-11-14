import { Typography, Divider, TablePagination } from "@mui/material";
import { useState } from "react";
const students = [
  {
    studentId: 1,
    studentName: "John Doe",
    studentUserName: "johndoe",
    studentEmail: "johndoe@gmail.com",
  },
  {
    studentId: 2,
    studentName: "Dima Salem",
    studentUserName: "DimaSalem",
    studentEmail: "johndoe@gmail.com",
  },
  {
    studentId: 3,
    studentName: "Leen Yasir",
    studentUserName: "LeenYasir",
    studentEmail: "LeenYasir@gmail.com",
  },
];

export default function Classlist() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  //handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div className="flex flex-col justify-between space-y-8">
      <div className="!flex !justify-end">
        <Typography
          color="primary"
          //   onClick={handleNewDialogOpen}
          className="!text-xl"
          variant="outlined"
          size="medium"
          //   startIcon={<AddIcon />}
        >
          {students.length} Students
        </Typography>
      </div>
      <div className="container space-y-6 !mx-auto">
        <div className="">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Announcements
          </Typography>
        </div>
        <Divider className="!my-4" />
        <div>
          <div className="flex flex-col justify-start space-y-6">
            {/* {students
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((announcement, index) => (
                <AnnouncementCard key={index} {...announcement} />
              ))} */}
          </div>
        </div>
        <Divider className="!my-4" />
        <TablePagination
          component="div"
          count={students.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          className="!text-neutral-textPrimary"
        />
      </div>
    </div>
  );
}
