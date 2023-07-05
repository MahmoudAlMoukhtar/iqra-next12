import React from "react";
import {Navigate} from "react-router-dom";
import {toast} from "react-toastify";

const PrivaitRoute = ({children}) => {
  const user = JSON.parse(localStorage.getItem("userIqraa"));

  if (user) {
    toast.warn(
      "You are already logged in to the website, to be able to access this page you must logout first"
    );
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivaitRoute;
