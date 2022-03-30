import React from "react";
import Products from "./Products";


export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/bg1.jpg" className="card-img" alt="Backgroung" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-2 fw-bolder mb-0">FOCUS ON <br/> WHAT YOU NEED</h5>
            
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
