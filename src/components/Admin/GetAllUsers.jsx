import { useContext, useEffect, useState } from "react";
import Spinner from "../../Spinner";
import { AuthContext } from "../../state-mangement/contextApi";
import Styles from "./_admin.module.css";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetAllUsers = () => {
  let { getAllUsersApi } = useContext(AuthContext);
  let [state, setState] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      let x = await getAllUsersApi();
      setState(x.users);
    };
    fetchData();
  }, []);
  if (state === null) {
    return <Spinner />;
  }
  return (
    <section id={Styles.userList}>
      <article>
        <h1>List of users</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>role</th>
            </tr>
          </thead>
          <tbody>
            {state === null ? (
              <Spinner />
            ) : (
              state.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <p className={Styles.icons}>
                        <span>{user.role}</span>
                        <span>
                          <Link to={`user/${user._id}`}>
                            <FaRegEdit />
                          </Link>
                        </span>
                      </p>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default GetAllUsers;
