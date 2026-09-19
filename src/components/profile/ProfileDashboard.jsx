import React, { Fragment } from "react";
import Styles from "./_profile.module.css";
import { useAuth } from "../../hooks/fetchUser";
let courses = [
  {
    course_name: "reactjs",
    trainer: "shashi",
    duration: "1month",
    price: 10000,
    date: "10/5/2026",
  },
  {
    course_name: "spring",
    trainer: "dixit",
    duration: "1month",
    price: 10000,
    date: "11/5/2026",
  },
];
const ProfileDashboard = () => {
  const { user } = useAuth();
  return (
    <section className={Styles.profileDashboard}>
      <article className={Styles.container}>
        {user === null ? (
          "Loading...."
        ) : (
          <>
            <aside className={Styles.sidebar}>
              <picture>
                <img
                  src="data:image/png;base64,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"
                  alt="avatar"
                />
              </picture>
              <figcaption>
                <h1>{user?.name}</h1>
              </figcaption>
            </aside>
            <aside className={Styles.content}>
              <main>
                <div>
                  <strong>Email</strong>
                  <span>{user?.email}</span>
                </div>
                <div>
                  <strong>Role</strong>
                  <span>{user?.role}</span>
                </div>
                <div className={Styles.courses}>
                  
                  {courses?.map((course) => {
                    return (
                      <main key={course?.course_name}>
                        <h1>{course.course_name}</h1>
                        <p>
                          <span>trainer</span> <span>{course?.trainer}</span>
                        </p>
                        <p>
                          <span>duration</span> <span>{course?.duration}</span>
                        </p>
                        <p>
                          <span>price</span> <span>{course?.price}</span>
                        </p>
                      </main>
                    );
                  })}
                </div>
              </main>
            </aside>
          </>
        )}
      </article>
    </section>
  );
};

export default ProfileDashboard;
