import { useParams } from "react-router-dom";



const SingleUser = () => {
    let {id} = useParams();
  return (
    <div>SingleUser {id}</div>
  )
}

export default SingleUser;