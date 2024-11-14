// import { useState } from "react";
// import { Button, TablePagination, Typography, Divider } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import AddIcon from "@mui/icons-material/Add";
// import AssignmentCard from "../../../Components/Teacher/Assignment/AssignmentCard";
// export default function AssignmentList() {
//   const assignments = [
//     {
//       name: "Assignment 1",
//       due: "2023-10-01",
//       submissions: 10,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       mark: 10,
//     },
//     {
//       name: "Assignment 2",
//       due: "2023-10-15",
//       submissions: 15,
//       description: "Description for Assignment 2",
//       mark: 20,
//     },
//     // Add more assignments as needed
//   ];

//   const Navigate = useNavigate();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <div className="flex flex-col justify-between space-y-8">
//       <div className="!flex !justify-end">
//         <Button
//           color="primary"
//           onClick={() =>
//             Navigate("/course-details/:courseName/assignments/create")
//           }
//           className=" !py-3 !space-x-1 !text-neutral-surface"
//           variant="contained"
//         >
//           <AddIcon />
//           <Typography>Create</Typography>
//         </Button>
//       </div>
//       <div
//         className="container space-y-6 !mx-auto"
//         // style={{ width: "700px" }}
//       >
//         <div className="">
//           <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
//             Assignments
//           </Typography>
//         </div>
//         <Divider className="!my-4" />
//         <div>
//           <div className="flex flex-col justify-start space-y-6">
//             {assignments
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((assignment, index) => (
//                 <AssignmentCard key={index} {...assignment} />
//               ))}
//           </div>
//         </div>
//         <Divider className="!my-4" />
//         <TablePagination
//           component="div"
//           count={assignments.length}
//           page={page}
//           onPageChange={handleChangePage}
//           rowsPerPage={rowsPerPage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//           rowsPerPageOptions={[5, 10, 25]}
//           className="!text-neutral-textPrimary"
//         />
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
import { Button, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
// import AssignmentCard from "../../../Components/Teacher/Assignment/AssignmentCard";
import AssignmentTable from "../../../Components/Teacher/Assignment/AssignmentTable";
export default function AssignmentList() {
  const assignments = [
    {
      assignmentId: 1,
      assignmentName: "Assignment 1",
      dueDate: "2024-11-02T00:07:38.913Z",
      visible: false,
      submissions: 20,
      description: "Description for Assignment 1",
      mark: 10,
    },
    {
      assignmentId: 2,
      assignmentName: "Assignment 2",
      dueDate: "2024-11-14T00:07:38.913Z",
      visible: true,
      submissions: 15,
      description: "Description for Assignment 2",
      mark: 20,
    },
  ];

  const Navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between space-y-8">
      <div className="!flex !justify-end">
        <Button
          color="primary"
          onClick={() =>
            Navigate("/course-details/:courseName/assignments/create")
          }
          className="!text-neutral-surface"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Create
        </Button>
      </div>
      <div className="container space-y-6 !mx-auto">
        <div className="">
          <Typography className="!font-bold !text-3xl !text-neutral-textPrimary">
            Assignments
          </Typography>
        </div>
        <Divider className="!my-4" />
        <div>
          <div className="flex flex-col justify-start space-y-6">
            <AssignmentTable assignments={assignments} />
          </div>
        </div>
        <Divider className="!my-4" />
      </div>
    </div>
  );
}
