import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container ft">
        <div className="row">
          <div className="col-6 mb-5">
            <img src="/assets/p_logo.png" className="py-5" height="200px" width="100%" />
          </div>
          <div className="col-6 py-5">
            <h3 className="text-light display-2">Paradise</h3>
            <h5 className="text-light display-6">Focus On What You Need</h5>
          </div>
          <hr/>
        <p className="fw-bold text-light text-center">Copyright © 2020 - 2022 DeveloperEdu.Org | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
