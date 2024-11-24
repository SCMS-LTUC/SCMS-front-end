// src/Components/Common/ProtectedRoute.jsx
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    };

export default ProtectedRoute;