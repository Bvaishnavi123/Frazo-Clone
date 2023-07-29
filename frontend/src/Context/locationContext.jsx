import React, { createContext, useState } from "react";


export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [locationContext, setLocationContext] = useState("");



  return (
    <LocationContext.Provider
      value={{ locationContext,setLocationContext }}
    >
      {children}
    </LocationContext.Provider>
  );
};
