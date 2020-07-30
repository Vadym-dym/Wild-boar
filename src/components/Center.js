import React from "react";

const Center = () => {
    return (
        <div className="container_center" >
            <div className="center_left_section" >
                <p>
                    <span style={{fontSize: "10vh"}}>Знайди</span><br/>
                    <span style={{fontSize: "8vh"}}>Роботу</span><br/>
                    <span style={{fontSize: "12vh", fontWeight: "bold"}}>Сьогодні</span></p>
                <button className="btn_left" >Почни Зараз</button>
            </div>
            <div className="container_circle" >
                <span className="circle_left_side" >Дай</span>
                <span className="circle_right_side" >Знайди</span>
            </div>
            <div className="center_right_section" >
                <p>
                    <span style={{fontSize: "10vh"}}>Дай</span><br/>
                    <span style={{fontSize: "8vh"}}>Роботу</span><br/>
                    <span style={{fontSize: "12vh", fontWeight: "bold"}}>Сьогодні</span></p>
                <button className="btn_right" >Почни Зараз</button>
            </div>
        </div>
    );
};

export default Center;