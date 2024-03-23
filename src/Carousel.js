import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';

const Carousel = () => {
    const myStyle = {
        width:"100%",
        height:"700px"
    };

    // Define the images array
    const images = [
        {
            src: "images/j1.jpg",
            alt: "Slide 1",
            caption: "APk",
            description: "We had such a great Trainer"
        },
        {
            src: "images/j2.jpg",
            alt: "Slide 2",
            caption: "Course",
            description: "Structure of Fees Normal"
        },
        {
            src: "images/j3.jpg",
            alt: "Slide 3",
            caption: "New York",
            description: "We love the Big Apple!"
        }
    ];

    return (
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {/* Map through the images array and generate buttons for each image */}
                {images.map((images, index) => (
                    <button key={index} type="button" data-bs-target="#demo" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></button>
                ))}
            </div>
            <div className="carousel-inner">
                {/* Map through the images array and generate carousel items for each image */}
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img src={image.src} className="d-block" style={myStyle} alt={image.alt} />
                        <div className="carousel-caption">
                            <h3>{image.caption}</h3>
                            <p>{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
}

export default Carousel;
