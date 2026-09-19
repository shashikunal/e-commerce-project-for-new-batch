import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/fetchUser";
import toast from "react-hot-toast";

const AuthNav = () => {
  const { user, logout } = useFetch();

  let handleLogout = () => {
      logout(); 
      localStorage.removeItem("TOKEN");
      toast.success("successfully user has been loggedout")
      window.location.assign("/auth/login")
     };

  return (
    <>
      <li>
        <Link to="#">Dashboard</Link>
      </li>
      <li>
        <Link to="#">{user?.name}</Link>
      </li>
      <li>
        <button onClick={ handleLogout}>Logout</button>
      </li>
    </>
  );
};

export default AuthNav;
