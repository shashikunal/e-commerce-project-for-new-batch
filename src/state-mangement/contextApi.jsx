import { createContext, useState } from "react";
import {
  createUser,
  Login,
  ActivationServiceApi,
} from "../services/api/authServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("TOKEN"));
  // const [activationToken , setActivationToken] = useState(localStorage.getItem("activationToken"));
  // const [activationCode , setActivationCode] = useState(localStorage.getItem("activationCode"));
  // const [successRes , setSuccessRes] = useState(localStorage.getItem("successRes"))
  const [user, setUser] = useState(null);

  //useEffect for fetching token and based token fetch users

  /*======================== REGISTER BLOCK START HERE ========================*/

  const register = async (name, email, password) => {
    try {
      //fetch
      const { success, activationToken, activationCode , 
mailUrl
 } = await createUser(
        name,
        email,
        password,
      );

      if (success === true) {
        localStorage.setItem("activationToken", activationToken);
        localStorage.setItem("activationCode", activationCode);
        localStorage.setItem("successRes", success);
        localStorage.setItem("mailUrl" , mailUrl)
      }
    } catch (error) {
      console.error(error);
    }
  };

  /*======================== REGISTER BLOCK ENDS HERE ========================*/

  /*========================ACTIVATION USER CODE STARTS HERE ========================*/

  const ActivationUser = async (activation_token, activation_code) => {
    try {
      await ActivationServiceApi(activation_token, activation_code);
    } catch (error) {
      throw error;
    }
  };

  /*========================ACTIVATION USER CODE ENDS HERE ========================*/

  const login = async (email, password) => {
    try {
      let tokenData = await Login(email, password);
      let { access_token, refresh_token } = tokenData;
      let newToken = access_token; //string
      setToken(tokenData);
      localStorage.setItem("TOKEN", newToken);
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <AuthContext.Provider value={{ register, login , ActivationUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
