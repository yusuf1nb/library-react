import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";

function highlight({ icon, title, para }) {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon}
      </div>
      <h3 className="highlight__subtitle">{title}</h3>
      <p className="highlight__para">
        {para}
      </p>
    </div>
  );
}

export default highlight;
