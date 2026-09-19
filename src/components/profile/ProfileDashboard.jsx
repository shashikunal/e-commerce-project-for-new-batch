import React from 'react'
import Styles from "./_profile.module.css";
const ProfileDashboard = () => {
  return (
    <section className={Styles.profileDashboard}>
      <article className={Styles.container}>
        <aside className={Styles.sidebar}>
          left sidebar
        </aside>
        <aside className={Styles.content}>content</aside>
      </article>
    </section>
  )
}

export default ProfileDashboard