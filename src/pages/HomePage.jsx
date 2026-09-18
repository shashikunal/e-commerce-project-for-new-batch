import { useContext } from "react";
import { AuthContext } from "../state-mangement/contextApi";

const HomePage = () => {
  let {user} = useContext(AuthContext);
  console.log(user)
  return (
    <div>HomePage</div>
  )
}

export default HomePage;