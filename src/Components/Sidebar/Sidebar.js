import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import sliderImg from "../../img/vinyl_PNG38 (1).png";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaPrayingHands } from "react-icons/fa";
import { FaRosary } from "react-icons/fa";

// داخل العنصر الذي ترغب في وض
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="circle flex">
        <img src={sliderImg} alt="" />
      </div>

      <div className="icons">
        <NavLink className="link" to="/القران الكريم">
          <span>
            <BiLibrary />
          </span>{" "}
          <span>القران الكريم</span>
        </NavLink>

        <NavLink className="link" activeclassname="active" to="/">
          <span>
            <FaPrayingHands />
          </span>{" "}
          <span>الرقية الشرعية</span>
        </NavLink>
        <NavLink className="link" to="/azkar">
          <span>
            <AiOutlineHeart />
          </span>{" "}
          <span>الأذكار</span>
        </NavLink>

      </div>
      <div className="sign-out">
        <NavLink className="link about" to="/about">
          <span>
            <HiOutlineInformationCircle />
          </span>{" "}
          <span> عــن المـوقع</span>
        </NavLink>
      </div>
    </div>
  );
}
