import React, { useEffect, useState } from "react";
import "./navbar.css";
import { AiFillHome } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidCategory } from "react-icons/bi";

const Navbar = () => {
  const [list, setList] = useState(0);

  return (
    <div className="navBox">
      <ul id="ulElement">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <li
            className={list == 0 ? "active" : ""}
            onClick={() => {
              setList(0);
            }}
          >
            <AiFillHome className="bottomNavIcon" />
            <h3>Home</h3>
          </li>
        </Link>
        <hr style={{ width: "30px", transform: "rotate(90deg)" }} />
        <Link
          to="/categories"
          style={{ textDecoration: "none", color: "black" }}
        >
          <li
            className={list == 1 ? "active" : ""}
            onClick={() => {
              setList(1);
            }}
          >
            {/* <BsFillLightningChargeFill className="bottomNavIcon" /> */}
            <BiSolidCategory className="bottomNavIcon" />
            <h3>Categories</h3>
          </li>
        </Link>
        <hr style={{ width: "30px", transform: "rotate(90deg)" }} />
        <Link to="/about" style={{textDecoration: "none", color: "black"}}> 
          <li
            className={list == 2 ? "active" : ""}
            onClick={() => {
              setList(2);
            }}
          >
            <AiFillContacts className="bottomNavIcon" />
            <h3>About</h3>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
