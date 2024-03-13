import { createContext, useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    axiosClient.get("/user/profile").then((response) => {
        setUser(response.data)
        console.log(response.data)
    }).catch((error) => {
        console.log(error)
        setUser(null)
    }).finally(() => {
        setIsLoading(false)
    })
  }, [])

  const login = async (data) => {
    axiosClient
      .post("/user/login", data)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = async () => {
    axiosClient
      .get("/user/logout")
      .then((response) => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          login,
          logout,
          user,
          isLoading,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
