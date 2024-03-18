import {useQuery} from "react-query";
import {getUser} from "../utils";
import React, {createContext, useState, useContext, useEffect} from "react";

type AppContext = {
  isLoggedIn: boolean;
};

const AppContext = createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const id = useQuery("getUser", getUser);

  useEffect(() => {
    const validateToken = async () => {
      try {
        if (id.status && id.status === "success") {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error validating token:", error);
        setIsLoggedIn(false);
      }
    };

    validateToken();
  }, [id]);

  return (
    <AppContext.Provider value={{isLoggedIn}}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
