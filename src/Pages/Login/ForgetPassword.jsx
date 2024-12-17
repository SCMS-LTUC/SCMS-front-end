import { useState } from "react";
import { showSnackbar, hideSnackbar } from "../../Redux/SnackbarSlice";
import NotificationSnackbar from "../../Components/Common/NotificationSnackbar";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import api from "../../Api/BaseUrl";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const { open, message, type } = useSelector((state) => state.snackbar);

    const handleOpenSnackbar = (message, type) => {
        dispatch(showSnackbar({ message, type }));
      };
    
      const handleCloseSnackbar = () => {
        dispatch(hideSnackbar());
      };
    
    const handleChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/Account/forgot-password", { email });
            const data = response.data;
            if (response.status === 200) {
                handleOpenSnackbar("Email sent succesfully", "success");
            } else {
                handleOpenSnackbar(data.message || "Failed to send reset password link", "error");
            }
        } catch (error) {
            handleOpenSnackbar("Failed to send reset password link: " + (error.response?.data?.message || error.message), "error");
        }
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Forget Password
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        fullWidth
                        className="w-full py-2 bg-secondary text-white font-medium rounded-md text-sm"
                    >
                        Send Reset Password Link
                    </Button>
                </form>
                <div className="text-center mt-6 text-sm">
                    <p className="text-gray-600">
                        Remember your password?
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
}

export default ForgetPassword;