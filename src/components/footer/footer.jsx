import React from "react";
import "./footer.scss";

function footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-left">
          <h4>Klinefelter Support Society</h4>
          <img className="footer-logo" />
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
