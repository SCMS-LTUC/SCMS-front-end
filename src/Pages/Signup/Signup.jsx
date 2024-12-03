import { useDepartments } from "../../Logic/Home/useDepartment";
import BaseUrl from "../../Api/BaseUrl";
import { showSnackbar, hideSnackbar } from "../../Redux/SnackbarSlice";
import NotificationSnackbar from "../../Components/Common/NotificationSnackbar";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const { departments } = useDepartments();
  const dispatch = useDispatch();
  const { open, message, type } = useSelector((state) => state.snackbar);

  const handleOpenSnackbar = (message, type) => {
    dispatch(showSnackbar({ message, type }));
  };

  const handleCloseSnackbar = () => {
    dispatch(hideSnackbar());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.confirmPassword.value) {
      handleOpenSnackbar("Passwords do not match", "error");
      return;
    }

    const user = {
      username: e.target.userName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: "Student",
      fullName: e.target.fullName.value,
      phoneNumber: e.target.phoneNumber.value,
      departmentId: e.target.department.value,
      courseLoad: 5,
    };

    try {
      const response = await BaseUrl.post("/Account/student/Register", user);
      console.log(response.data);
      handleOpenSnackbar("User registered successfully, Please Confirm your email before you log-in", "success");
    } catch (error) {
      console.error(error);
      handleOpenSnackbar("Error registering user", "error");
    }

    e.target.reset();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Enter your full name"
              required
            />
          </div>
          {/* User Name Input */}
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Enter your user name"
              required
            />
          </div>
          {/* Department Input */}
          <div className="mb-4">
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Department
            </label>
            <select
              id="department"
              className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            >
              <option value="">Select your department</option>
              {departments.map((department) => (
                <option key={department.departmentId} value={department.departmentId}>
                  {department.departmentName}
                </option>
              ))}
            </select>
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Phone Number Input */}
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Enter your phone number"
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-secondary text-white font-medium rounded-md hover:bg-[#178f69]"
          >
            Sign Up
          </button>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-6 text-sm">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-secondary hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
      <NotificationSnackbar
        open={open}
        onClose={handleCloseSnackbar}
        message={message}
        type={type}
      />
    </div>
  );
};

export default Signup;
