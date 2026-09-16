import { createContext, useState } from "react";
import { createUser, Login } from "../services/api/authServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token ,setToken] = useState(localStorage.getItem("TOKEN"))
  const register = async (name, email, password, avatar) => {
    try {
      //fetch
      await createUser(name, email, password, avatar);
    } catch (error) {
      console.error(error);
    }
  };

  const login = async(email , password) =>{
   try {
   let tokenData =  await Login(email , password);
   let {access_token , refresh_token} = tokenData;
  let newToken = access_token; //string
     setToken(tokenData)
    localStorage.setItem("TOKEN" , newToken)
   } catch (error) {
    throw error;
   } 
  }



  return (
    <>
      <AuthContext.Provider value={{ register , login }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
