import React, { useState } from "react";
import InfoContainer from "./InfoContainer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  const [activeItem, setActiveItem] = useState(0); // State to track the active item

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  return (
    <div className="layout">
      <button className="backButton">
        <img src="/utils/arrow.jpeg" /> back
      </button>
      <InfoContainer />
      <NavBar activeItem={activeItem} handleItemClick={handleItemClick} />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Layout;
