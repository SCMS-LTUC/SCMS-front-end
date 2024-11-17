// src/reducers/userReducer.js
const initialState = {
  isAuthenticated: !!localStorage.getItem("accessToken"),
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  role: localStorage.getItem("role") || null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      localStorage.setItem("role", action.payload.role);
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        role: action.payload.role,
      };
    case "LOGOUT":
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("role");
      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
        role: null,
      };
    default:
      return state;
  }
};

export default userReducer;