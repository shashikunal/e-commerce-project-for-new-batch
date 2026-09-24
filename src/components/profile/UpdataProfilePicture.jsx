import { useContext, useState } from "react";
import Styles from "./_profile.module.css";
import { useAuth } from "../../hooks/fetchUser";
import { AuthContext } from "../../state-mangement/contextApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const UpdataProfilePicture = () => {
  const navigate = useNavigate();
  const { updateProfilePicture } = useContext(AuthContext);
  let { user } = useAuth();


  const handleSubmit =  (e) => {
    
  };

  return (
    <aside className={Styles.content}>
      <main className={Styles.updateForm}>
        <h1>update profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Update Picture</label>
            <input
              type="file"
              required
             accept="image/*"
            />
          </div>
          <div className="form-group">
            <button>update Profile Picture</button>
          </div>
        </form>
      </main>
    </aside>
  );
};

export default UpdataProfilePicture;
