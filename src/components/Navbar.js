import React from "react";

const Navbar = () => {
  return (
    <div className="container_navbar" >
      <div className="navbar_left_section" >
        <div className="logo" >CAN<br/>DO IT</div>
        <div className="menu" >Чому Ми?</div>
        <div className="menu" >Контакти</div>
      </div>
      <div  className="navbar_right_section" >
        <div className="login" >Вхід</div>
        <div className="login" >Реєстрація</div>
      </div>
    </div>
  );
};

export default Navbar;