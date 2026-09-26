import Styles from "./_admin.module.css"

const AdminDashboard = () => {
  return (
    <section className={Styles.admin_dashboard}>
      <article className='admin-container'>
          <aside>
            sidebar
          </aside>
          <aside>
            content
          </aside>
      </article>
    </section>
  )
}

export default AdminDashboard