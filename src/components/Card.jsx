import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  

  return (
    <> 
      <Link to = {"/teacher/"+props?.data?.id}>
        <div className="card-box">
            <div className="card-img" style={{
                backgroundImage: "url("+"https://img.youtube.com/vi/"+props?.data?.photo+"/sddefault.jpg"+")",
                backgroundPosition: "center",
                backgroundSize: "cover"
                }}></div>
            <div className="card-title">{props?.data?.title}</div>
            <div className="card-title-name">{props?.data?.firstname+" "+props?.data?.lastname}</div>
        </div>
      </Link>
    </>
  );
};

export default Card;
