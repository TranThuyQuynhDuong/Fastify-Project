import React, { useState, useEffect } from "react";
import apiBanner from "../../../api/apiBanner";
import { imageURL } from "../../../api/config";

function Slider() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    apiBanner.getSliderByPosition("slider-main").then((res) => {
      try {
        setSlider(res.data);
      } catch (e) {
        console.log(e);
      }
    });
  }, []);
  // State to track the active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to go to the next slide
  const goToNext = () => {
    setActiveIndex((current) => (current === 2 ? 0 : current + 1));
  };

  // Function to go to the previous slide
  const goToPrev = () => {
    setActiveIndex((current) => (current === 0 ? 2 : current - 1));
  };

  // Set up a timer to auto-advance the slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(goToNext, 10000);
    return () => clearInterval(timer); // Clean up the timer
  }, []);

  return (
    <section id="slider">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div
              id="slider-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                {[0].map((index) => (
                  <li
                    key={index}
                    data-target="#slider-carousel"
                    data-slide-to={index}
                    className={activeIndex === index ? "active" : ""}
                  ></li>
                ))}
              </ol>
              <div className="carousel-inner">
                {slider.length > 0 && (
                  <div
                    className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}
                  >
                    <div className="col-sm-6 shifted-right">
                      <div style={{ marginLeft: "20%", marginTop: "20%" }}>
                        <h1>{slider[activeIndex].name}</h1>
                        <h2>{slider[activeIndex].description}</h2>
                        {/* <button type="button" className="btn btn-default get">
                          Get it now
                        </button> */}
                      </div>
                    </div>
                    <div className="col-sm-6 shifted-right1 ">
                      <img
                        src={imageURL + slider[activeIndex].image}
                        className="girl img-responsive"
                        alt={`Slide ${activeIndex + 1}`}
                      />
                    </div>
                  </div>
                )}
              </div>
              <a
                onClick={goToPrev}
                className="left control-carousel hidden-xs"
                data-slide="prev"
              >
                <i className="fa fa-angle-left"></i>
              </a>
              <a
                onClick={goToNext}
                className="right control-carousel hidden-xs"
                data-slide="next"
              >
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
