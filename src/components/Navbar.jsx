import React, { useEffect, useState } from "react";
import "./navbar.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { AiFillContacts } from "react-icons/ai";

const Navbar = () => {
  const [list, setList] = useState(0);

  return (
    <div className="navBox">
      <ul id="ulElement">
        <li
          className={list == 0 ? "active" : ""}
          onClick={() => {
            setList(0);
          }}
        >
          <AiFillHome className="bottomNavIcon" />
          <h3>Home</h3>
        </li>
        <hr style={{width:"30px", transform: "rotate(90deg)"}}/>
        <li
          className={list == 1 ? "active" : ""}
          onClick={() => {
            setList(1);
          }}
        >
          <BsFillLightningChargeFill className="bottomNavIcon" />
          <h3>Popular</h3>
        </li>
        <hr style={{width:"30px", transform: "rotate(90deg)"}}/>
        <li
          className={list == 2 ? "active" : ""}
          onClick={() => {
            setList(2);
          }}
        >
          <AiFillContacts className="bottomNavIcon" />
          <h3>Contact</h3>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
