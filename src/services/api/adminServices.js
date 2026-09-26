import api from "./axios";
/* @Create Register 
HTTP METHOD IS GET 
RESPONSE STATUS CODE is 200 
RESPONSE STATUS TEXT is Ok 
this ADMIN  view
DOES not  have request payload 
response has data or not 
*/

export const fetchAllUsers = async () => {
  let { data } = await api.get("/auth/get-all-user-dashboard");
  return data;
};
