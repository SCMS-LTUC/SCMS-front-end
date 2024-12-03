// src/Components/Common/ProtectedRoute.jsx
import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from '../../Pages/Home/HomePage';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return isAuthenticated ? children : <HomePage />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    };

export default ProtectedRoute;