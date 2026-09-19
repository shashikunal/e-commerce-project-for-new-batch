import {useFetch} from "../hooks/fetchUser";

const HomePage = () => {
const {user} = useFetch();


  return (
    <div>
      <h1>{user?.name}</h1>
    </div>
  )
}

export default HomePage;