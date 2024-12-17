import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@mui/material";
import { showSnackbar, hideSnackbar } from "../../Redux/SnackbarSlice";
import NotificationSnackbar from "../../Components/Common/NotificationSnackbar";
import { useDispatch, useSelector } from "react-redux";
import api from '../../Api/BaseUrl';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const { open, message, type } = useSelector((state) => state.snackbar);

  const location = useLocation();

  const handleOpenSnackbar = (message, type) => {
    dispatch(showSnackbar({ message, type }));
  };

  const handleCloseSnackbar = () => {
    dispatch(hideSnackbar());
  };

  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const token = queryParams.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      handleOpenSnackbar('Passwords do not match', 'error');
      return;
    }
    try {
      const response = await api.post('/Account/reset-password', { email, newPassword: password, confirmPassword, token });
      const data = response.data;
      if (response.status === 200) {
        handleOpenSnackbar('Password reset successfully', 'success');
      } else {
        handleOpenSnackbar(data.message || 'Failed to reset password', 'error');
      }
    } catch (error) {
      handleOpenSnackbar('Failed to reset password: ' + (error.response?.data?.message || error.message), 'error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
              placeholder="New Password"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
              placeholder="Confirm New Password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="form-checkbox"
              />
              <span className="ml-2 text-sm text-gray-700">Show Password</span>
            </label>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            className="w-full py-2 bg-secondary text-white font-medium rounded-md text-sm"
          >
            Reset Password
          </Button>
        </form>
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

export default ResetPassword;