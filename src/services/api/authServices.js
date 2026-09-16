import api from "./axios";

/* @Create Register 
HTTP METHOD IS POST 
RESPONSE STATUS CODE is 201 
RESPONSE STATUS TEXT is created 
this global  view
must have request payload 
response has data or not 
*/

export const createUser = async(payload) =>{
   const {data} = await api.post("/users" , payload); //we http post request for creating new user
  console.log(data);
   return data;
}

export const Login = async(payload) =>{
   const {data} = await api.post("/auth/login" , payload);
   return data;
}