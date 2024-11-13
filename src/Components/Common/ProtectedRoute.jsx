// [src/Components/Common/ProtectedRoute.jsx](src/Components/Common/ProtectedRoute.jsx)
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from '../../Api/BaseUrl';
import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookie.get('AuthToken');
        console.log('Token:', token);
        if (!token) throw new Error('No token found');
        const response = await axios.get('/api/Account/validate');
        console.log('User is authenticated:', response);
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;