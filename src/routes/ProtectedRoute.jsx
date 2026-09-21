// import { useAuth } from "../hooks/fetchUser";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { AuthContext } from "../state-mangement/contextApi";
import { useContext } from "react";

const ProtectedRoute = () => {

  let { token } = useContext(AuthContext);
  if (token) {
    return <Outlet />;
  }else {
   return <Navigate to="/auth/login" replace />
  }
  
};

export default ProtectedRoute;
