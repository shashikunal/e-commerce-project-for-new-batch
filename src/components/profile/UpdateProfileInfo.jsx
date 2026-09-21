import { useContext, useState } from "react";
import Styles from "./_profile.module.css";
import { useAuth } from "../../hooks/fetchUser";
import { AuthContext } from "../../state-mangement/contextApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UpdateUserInfoApi } from "../../services/api/authServices";

const UpdateProfileInfo = () => {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);
  let { user } = useAuth();
  let [name, setName] = useState(user.name);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      // console.log(name);
      // updateUserInfo(name);
  //  await axios.put("https://mockapi-mauve.vercel.app/api/v1/auth/update-user-info" , name);
 let data = await UpdateUserInfoApi(name);
      console.log(data)
      toast.success("successfully user profile has been updated");
      navigate("/user/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <aside className={Styles.content}>
      <main className={Styles.updateForm}>
        <h1>update profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              value={name}
              placeholder="enter name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button>update info</button>
          </div>
        </form>
      </main>
    </aside>
  );
};

export default UpdateProfileInfo;
