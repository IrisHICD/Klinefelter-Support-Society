import React from "react";
import "./info.scss";
import dna from "../../assets/images/infoimg.png";

function info() {
  return (
    <div className="info">
      <div className="info__left"></div>
      <img className="info__img" src={dna}></img>
      <div className="info__right">
        <h2 className="info__text">Discover our mission</h2>
        <p className="info__text">
          Learn more about our dedication to raising awareness about Klinefelter
          syndrome, the positive impact we create in the lives of individuals
          with the condition, and the sense of belonging we strive to foster
          within our community. Join us in our mission to provide unwavering
          support, resources, and advocacy for those affected by Klinefelter
          syndrome across Canada. Together, we can make a meaningful difference
          in increasing understanding, ensuring better care, and improving the
          quality of life for all individuals living with Klinefelter syndrome.
        </p>
      </div>
    </div>
  );
}

export default info;
