// src/Pages/Login/Login.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";
import api from "../../Api/BaseUrl";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ 
      ...credentials, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await api.post("/Account/Login", credentials);
      const data = response.data;
      if (response.status === 200) {
        dispatch({
          type: "LOGIN",
          payload: {
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            role: data.roles.$values[0],
          },
        });
        navigate("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("Login failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          fullWidth
          margin="normal"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;