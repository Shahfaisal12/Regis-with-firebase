import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const PageNotFound = () => {
  return (
    <div className="d-flex align-items-center" style={{ height: "80vh" }}>
      <div className="w-75 m-auto">
        <p className="h1 fw-bold mb-3" align="center">404</p>
        <p align="center" className="h5 fw-bold mb-3">
          Sorry! Page Not Found
        </p>
        <p align="center" className="fst-italic mb-3">
          Sorry this content has been moved Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Earum, amet perferendis, nemo facere
          excepturi quis.
        </p>
        <div align="center">
          <Link to="/">
            <Button className="fw-bold">
              GO TO HOME PAGE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
