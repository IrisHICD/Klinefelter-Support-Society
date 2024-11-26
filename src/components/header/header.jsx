import React from "react";
import "./header.scss";
import menwalk from "../../assets/images/menwalking.jpg";

function header() {
  return (
    <div>
      <img className="header__img" src={menwalk} alt="Men Walking in a Group" />
    </div>
  );
}

export default header;
