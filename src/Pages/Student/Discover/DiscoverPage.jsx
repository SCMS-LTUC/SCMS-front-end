import { useState } from "react";
import {
  TablePagination,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
} from "@mui/material";
import InfoCard from "../../../Components/Student/Discover/CourseCard.jsx";
import SearchIcon from "@mui/icons-material/Search";
import {
  // notStartedCourses,
  departments,
} from "../../../Logic/Student/Data.jsx";
import {
  useNotStartedCourses,
  useEnroll,
} from "../../../Logic/Student/useAllCourses.js";
const levels = ["Beginner", "Intermediate", "Advanced"];

const MyCourses = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { NotStartedCourses, status, error } = useNotStartedCourses();
  const { enroll } = useEnroll();
  const notStartedCourses = NotStartedCourses;
  const handleOnClickEnroll = (courseId) => {
    enroll(courseId);
    console.log("this is the course Id", courseId);
  };
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    if (error === "Request failed with status code 401") {
      // navigate("/login");
    }
    return <div>{error}</div>;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setPage(0); // Reset pagination on filter change
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
    setPage(0); // Reset pagination on filter change
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setPage(0); // Reset pagination on search change
  };

  // Filter courses based on department, level, and search term
  const filteredCourses = notStartedCourses.$values?.filter((course) => {
    const matchesDepartment = selectedDepartment
      ? course.department === selectedDepartment
      : true;
    const matchesLevel = selectedLevel ? course.level === selectedLevel : true;
    const matchesSearch = searchTerm
      ? course.className.toLowerCase().includes(searchTerm)
      : true;

    return matchesDepartment && matchesLevel && matchesSearch;
  });

  return (
    <div>
      <div className="container !mx-auto space-y-8 !min-h-screen">
        {/* Filters */}
        <div className="flex justify-between  mb-6 items-center ">
          <div className="flex flex-wrap  gap-4  items-center ">
            {/* Department Filter */}
            <FormControl
              variant="outlined"
              size="small"
              className="min-w-[200px]"
            >
              <InputLabel>Department</InputLabel>
              <Select
                value={selectedDepartment}
                onChange={handleDepartmentChange}
                label="Department"
                className="!w-48"
              >
                <MenuItem value="">All</MenuItem>
                {departments.$values.map((dept) => (
                  <MenuItem key={dept.departmentId} value={dept.departmentName}>
                    {dept.departmentName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Level Filter */}
            <FormControl
              variant="outlined"
              size="small"
              className="min-w-[200px]"
            >
              <InputLabel>Level</InputLabel>
              <Select
                value={selectedLevel}
                onChange={handleLevelChange}
                label="Level"
                className="!w-36"
              >
                <MenuItem value="">All</MenuItem>
                {levels.map((level) => (
                  <MenuItem key={level} value={level}>
                    {level}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            {/* Search Bar */}
            <TextField
              variant="outlined"
              size="small"
              label="Search"
              placeholder="Search for a course"
              value={searchTerm}
              onChange={handleSearchChange}
              className="!w-72"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon className="text-neutral-textSecondary" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>

        {/* Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCourses
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((course, index) => (
              <InfoCard
                key={index}
                courseId={course.courseId}
                courseName={course.className}
                teacher={course.teacherName}
                department={course.department}
                startDate={course.startDate}
                endDate={course.endDate}
                startTime={course.startTime}
                endTime={course.endTime}
                days={course.days.$values}
                description={course.description}
                level={course.level}
                capacity={course.capacity}
                numberOfEnrolledStudents={course.numberOfEnrolledStudents}
                price={course.price}
                numberOfHours={course.numberOfHours}
                handleOnClickEnroll={handleOnClickEnroll}
              />
            ))}
        </div>
      </div>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredCourses?.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        className="!text-neutral-textPrimary"
      />
    </div>
  );
};

export default MyCourses;
