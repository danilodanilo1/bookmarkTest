import React, { useState } from "react";

export const StoreContext = React.createContext();

export const StoreProvider = (props) => {
  const [booked, setBooked] = useState([]);

  const handleDelete = (id) => {
    let deleted = booked.filter((i) => i.id !== id);
    setBooked(deleted);
  };

  return (
    <StoreContext.Provider value={{ booked, setBooked, handleDelete }}>
      {props.children}
    </StoreContext.Provider>
  );
};
