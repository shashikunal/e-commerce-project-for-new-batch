import React from 'react'
import { Link } from 'react-router-dom';
import { useFetch } from '../../../hooks/fetchUser';

const AuthNav = () => {
    const {user} = useFetch();
  return (
    <>
    <li>
        <Link to="#">Dashboard</Link>
      </li>
       <li>

        <Link to="#">
            {user?.name}
        </Link>
      </li>
       <li>
        <Link to="/auth/logout">Logout</Link>
      </li>
    </>
  )
}

export default AuthNav