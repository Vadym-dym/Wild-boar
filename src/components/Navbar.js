import React from "react";

const Navbar = () => {
  return (
    <div 
    style={{
        width: "95vw",
        height: "10vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        justifyItems: "center",
        marginLeft: "50%",
        transform: "translate(-50%)",
        marginTop: 50
      }}
    >
      <div style={{ width: "35vw", display: "flex",  flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{          
          border: "1px solid #FF8A00",
          fontFamily: "RefusePro",
          fontSize: "5vh",
          padding: 20
        }}>CAN<br/>DO IT</div>
        <div style={{ fontFamily: "TT Pines", fontSize: "5vh" }}>Чому Ми?</div>
        <div style={{ fontFamily: "TT Pines", fontSize: "5vh" }}>Контакти</div>
      </div>
      <div style={{ width: "20vw", display: "flex",  flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
        <div style={{ fontFamily: "TT Pines", fontSize: "5vh", color: "#FFFFFF" }}>Вхід</div>
        <div style={{ fontFamily: "TT Pines", fontSize: "5vh", color: "#FFFFFF" }}>Реєстрація</div>
      </div>
    </div>
  );
};

export default Navbar;