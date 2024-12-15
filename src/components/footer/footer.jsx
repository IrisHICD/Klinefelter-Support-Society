import React from "react";
import "./footer.scss";
import logo from "../../assets/images/new_logo.webp";

function footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-left">
          <img src={logo} className="footer-logo" type="image/webp" />
          <h4>Klinefelter Support Society</h4>
        </div>
        <div className="footer-mid">
          <p>(add social media links)</p>
        </div>
        <div className="footer-right">
          <div className="footer-info">
            <p>
              <strong>Location:</strong> Edmonton, AB
            </p>
            <p>
              <strong>Contact:</strong>{" "}
              <a href="mailto:admin@klinefeltersupport.org">
                admin@klinefeltersupport.org
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
