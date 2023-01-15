import React from "react";
import { Container } from "@mui/system";
import "../css/SubHeader.css";

export default function SubHeader({ loc, path }) {
  return (
    <div className="background ">
      <div className="container-lg sub-container">
        <h1>{loc}</h1>
        <h5>
          {loc} - <span>{path}</span>
        </h5>
      </div>
    </div>
  );
}
