import React from "react";

const Center = () => {
    return (
        <div style={{
            width: "80vw",
            height: "60vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "10vh",
            marginLeft: "50%",
            transform: "translate(-50%)"
        }}>
            <div style={{ 
                    color: "#FF8A00",
                    fontFamily: "TT Pines" }}>
                <p>
                    <span style={{fontSize: "10vh"}}>Знайди</span><br/>
                    <span style={{fontSize: "8vh"}}>Роботу</span><br/>
                    <span style={{fontSize: "12vh", fontWeight: "bold"}}>Сьогодні</span></p>
                <button style={{
                    border: "1px solid #FF8A00",
                    fontSize: "5vh",
                    fontWeight: "bold",
                    padding: 10,
                    paddingLeft: 50,
                    paddingRight: 50,
                    color: "#FF8A00",
                    backgroundColor: "#FFFFFF",
                    marginTop: "10vh"
                }}>Почни Зараз</button>
            </div>
            <div style={{
                 width: "20vw",
                 height: "20vw",
                 background: "linear-gradient( -90deg, #FFFFFF 50%, #FF8A00 50% )", 
                 borderRadius: "50%",
                 display: "flex",
                 flexDirection: "row",
                 fontSize: "5vh",
                 position: "relative"
            }}>
                <span style={{ 
                    color: "#FFFFFF", 
                    position: "absolute", 
                    top: "50%", 
                    left: "25%", 
                    transform: "translate(-50%, -50%)" }}>Дай</span>
                <span style={{ color: "#FF8A00",
                    position: "absolute", 
                    top: "50%", 
                    right: "25%", 
                    transform: "translate(50%, -50%)" }}>Знайди</span>
            </div>
            <div style={{ 
                    color: "#FFFFFF",
                    fontFamily: "TT Pines" }}>
                <p>
                    <span style={{fontSize: "10vh"}}>Дай</span><br/>
                    <span style={{fontSize: "8vh"}}>Роботу</span><br/>
                    <span style={{fontSize: "12vh", fontWeight: "bold"}}>Сьогодні</span></p>
                <button style={{
                    border: "1px solid #FFFFFF",
                    fontSize: "5vh",
                    fontWeight: "bold",
                    padding: 10,
                    paddingLeft: 50,
                    paddingRight: 50,
                    color: "#FFFFFF",
                    backgroundColor: "#FF8A00",
                    marginTop: "10vh"
                }}>Почни Зараз</button>
            </div>
        </div>
    );
};

export default Center;