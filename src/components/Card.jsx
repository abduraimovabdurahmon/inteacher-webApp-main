import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <>
        <div className="card-box">
            <div className="card-img" style={{
                backgroundImage: "url("+"https://img.youtube.com/vi/-Gp_qmlL16c/sddefault.jpg"+")",
                backgroundPosition: "center",
                backgroundSize: "cover"
                }}></div>
            <div className="card-title">{props.title? props.title:"Arab tili o'qituvchisi"}</div>
        </div>
    </>
  );
};

export default Card;
