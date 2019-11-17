import React, { Component } from "react";
import "./Carousel.scss";
import baby from "./baby1.jpg";
import velvet from "./velvet.jpg";
import baby3 from "./baby3.jpg";
import baby4 from "./baby4.jpg";

class Carousel extends Component {
  render() {
    return (
      <div className="Carousel">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
          </ul>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={baby} alt="kitenge" />
              <div class="carousel-caption">
                <h3>Dresses</h3>
                <p>All sizes available!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={velvet} alt="Chicago" />
              <div class="carousel-caption">
                <h3>Hats</h3>
                <p>Grab your today!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={baby3} alt="New York" />
              <div class="carousel-caption">
                <h3>Grab yours today</h3>
                <p>Variety of clothes</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={baby4} alt="Chicago" />
              <div class="carousel-caption">
                <h3>Price</h3>
                <p>At affordable prices</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
