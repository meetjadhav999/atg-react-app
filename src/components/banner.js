import React from "react";
import { Button } from "react-bootstrap";

function Banner() {
  return (
    <div className="container-fluid p-0 banner">
      <div className="backgroundimg">      
      <Button className="bg-transparent border-2 border-white text-white float-end extra-small-font m-2 d-block d-md-none">Join Group</Button>
      </div>
      <div className="banner-text-div ms-2 ms-sm-4 ms-md-5">
        <h1 className="text-white">Computer Engineering</h1>
        <p className="text-white">142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
}

export default Banner;
