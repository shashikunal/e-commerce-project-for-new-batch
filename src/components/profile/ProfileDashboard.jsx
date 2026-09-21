import React, { Fragment } from "react";
import Styles from "./_profile.module.css";
import { useAuth } from "../../hooks/fetchUser";

import ProfileSidebar from "./ProfileSidebar";
import ProfileContent from "./ProfileContent";

const ProfileDashboard = () => {
  const { user } = useAuth();
  return (
    <section className={Styles.profileDashboard}>
      <article className={Styles.container}>
        {user === null ? (
          "Loading...."
        ) : (
          <>
            <ProfileSidebar />
            <ProfileContent />
          </>
        )}
      </article>
    </section>
  );
};

export default ProfileDashboard;
