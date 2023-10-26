import React from "react";
import { BiSolidErrorCircle } from "react-icons/bi";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <BiSolidErrorCircle />

      <h2>Page Not Found </h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
