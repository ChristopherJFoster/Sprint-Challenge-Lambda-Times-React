import React, { Component } from "react";
import { carouselData } from "../../data";

// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselImages: [],
      selected: 0
    };
  }
  componentDidMount() {
    this.setState({ carouselImages: carouselData });
  }

  leftClick = () => {
    this.setState(function(prevState) {
      if (prevState.selected === 0) {
        return {
          selected: prevState.carouselImages.length - 1
        };
      } else if (prevState.selected > 0) {
        return {
          selected: prevState.selected - 1
        };
      }
    });
  };

  rightClick = () => {
    this.setState(function(prevState) {
      if (prevState.selected === prevState.carouselImages.length - 1) {
        return {
          selected: 0
        };
      } else if (prevState.selected < prevState.carouselImages.length - 1) {
        return {
          selected: prevState.selected + 1
        };
      }
    });
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.carouselImages[this.state.selected]}
        style={{ display: "block" }}
        alt={this.state.carouselImages[this.state.selected]}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
