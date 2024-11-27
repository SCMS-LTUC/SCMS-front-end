// // src/Pages/Login/Login.jsx
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { TextField, Button, Container, Typography } from "@mui/material";
// import api from "../../Api/BaseUrl";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({
//       ...credentials,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const response = await api.post("/Account/Login", credentials);
//       const data = response.data;
//       if (response.status === 200) {
//         dispatch({
//           type: "LOGIN",
//           payload: {
//             accessToken: data.accessToken,
//             refreshToken: data.refreshToken,
//             role: data.roles.$values[0],
//           },
//         });
//         navigate("/");
//       } else {
//         setError(data.message || "Login failed");
//       }
//     } catch (error) {
//       setError(
//         "Login failed: " + (error.response?.data?.message || error.message)
//       );
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" component="h1" gutterBottom>
//         Login
//       </Typography>
//       {error && <Typography color="error">{error}</Typography>}
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Username"
//           name="username"
//           fullWidth
//           margin="normal"
//           value={credentials.username}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           label="Password"
//           name="password"
//           type="password"
//           fullWidth
//           margin="normal"
//           value={credentials.password}
//           onChange={handleChange}
//           required
//         />
//         <Button type="submit" variant="contained" color="primary" fullWidth>
//           Login
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default Login;

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Login
        </h2>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="username"
              id="email"
              className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#20B486]"
              placeholder="Enter your email"
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
              className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#20B486]"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#20B486] text-white font-medium rounded-md hover:bg-[#178f69]"
          >
            Login
          </button>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-6 text-sm">
          <p className="text-gray-600">
            Don t have an account?{" "}
            <a href="/register" className="text-[#20B486] hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
