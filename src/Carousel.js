import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Carousel = () => {
    const myStyle = {
        width:"100%",
        height:"700px"
      };
  return (
  <div id="demo" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="images/j1.jpg" className="d-block" style={myStyle} />
            <div className="carousel-caption">
                <h3>APk</h3>
                <p>We had such a great Trainer</p>
            </div>
        </div>
    <div className="carousel-item">
    <img src="images/j2.jpg" className="d-block" style={myStyle} />
      <div className="carousel-caption">
        <h3>Course</h3>
        <p>Structure of Fees Normal</p>
      </div> 
    </div>
    <div className="carousel-item">
    <img src="images/j3.jpg" className="d-block" style={myStyle} />
      <div className="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>  
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
  )
}

export default Carousel