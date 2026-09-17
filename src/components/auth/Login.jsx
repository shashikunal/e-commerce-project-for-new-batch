import {useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../state-mangement/contextApi";
import Styles from "./auth.module.css";
import toast from "react-hot-toast";

const Login = () => {
  let {login} = useContext(AuthContext);
  let navigate = useNavigate();
  let [state , setState] = useState({
    username:"",
    password:"",
    isLoading:false,
    });
let { username , password , isLoading} = state;



let handleChange = e =>{
  const {name , value} = e.target;
  setState({...state , [name]:value})
}

let handleSubmit = async(e) =>{
  e.preventDefault();
  try {
      let payload = { username , password};
      setState({isLoading:true});
      await login(payload);
   toast.success("successfully user has been loggedin");
      navigate("/")

  } catch (error) {
    console.log(error);
      toast.error("something went wrong")
  }finally {
     setState({isLoading:false , email:"" , password:""})
     
  }
 
}

  return (
    <section id={Styles.auth}>
      <article className={Styles.auth_block}>
        <header>
          <h1>Login</h1>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
         
             <div className="form-group">
              <label htmlFor="email">username</label>
              <input
                type="username"
                className="form-control"
                name="username"
                placeholder="enter username"
                required
                value={username}
                id="username"
                 onChange={handleChange}
              />
            </div>

               <div className="form-group">
              <label htmlFor="email">password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="enter password"
                required
                value={password}
                id="password"
                 onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button>{isLoading ? 'loading ' : "Login"}</button>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};

export default Login;
