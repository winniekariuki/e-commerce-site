import React, { Component } from "react";
import "./Carousel.scss";
import baby from "../../Image/image1.jpg";
import velvet from "../../Image/imag2.jpg";
import baby3 from "../../Image/image3.jpg";
import baby4 from "../../Image/men.jpg";

class Carousel extends Component {
  render() {
    return (
      <div className="Carousel">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={baby} alt="kitenge" />
              <div className="carousel-caption">
                <h3>Dresses</h3>
                <p>All sizes available!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={velvet} alt="Chicago" />
              <div className="carousel-caption">
                <h3>Hats</h3>
                <p>Grab your today!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={baby3} alt="New York" />
              <div className="carousel-caption">
                <h3>Grab yours today</h3>
                <p>Variety of clothes</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={baby4} alt="Chicago" />
              <div className="carousel-caption">
                <h3>Price</h3>
                <p>At affordable prices</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
