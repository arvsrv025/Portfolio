import React from "react";
import "./Introduction.css";
// import background from "../../assets/image1.png";

const Introduction = () => {
  return (
    <div className="intro">
      <div className="name ">
        <p>Hey! :)</p>
        <p>This is </p>
        <p style={{color:"#39ff14"}}>Arnav Srivastava.</p>
        <p>A developing developer</p>
        <p>and a resourcefull</p>
        <p>engineer</p>
        {/* <p>＜(＾-＾)＞</p> */}
      </div>
      <p className="text animate-slide whitespace-nowrap duration-1000">WELCOME to my Portfolio website. A short tour through my tech journey</p>
    </div>
  );
};

export default Introduction;
