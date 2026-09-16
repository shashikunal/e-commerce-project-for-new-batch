import React from 'react';
import Styles from "./_navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section id={Styles.navbar}>
        <article className={Styles.container}>
            <aside className={Styles.logoBlock}>
                <a href='#'>SELLIT</a>
            </aside>
            <aside className={Styles.menuBlock}>
               <nav>
                <ul>
                    <li>
                        <Link to="#">Dashboard</Link>
                    </li>
                     <li>
                        <Link to="/auth/register">Register</Link>
                    </li>
                     <li>
                        <Link to="/auth/Login">Login</Link>
                    </li>
                     <li>
                        <Link to="/auth/logout">Logout</Link>
                    </li>
                </ul>
               </nav>
            </aside>
        </article>
    </section>
  )
}

export default Navbar;