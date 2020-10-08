import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";
import { tourData } from "./tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => {
    const { tours } = this.state;
    const filteredTours = tours.filter((tour) => tour.id !== id);
    this.setState({ tours: filteredTours });
  };
  render() {
    const tourslist = this.state.tours.map((tour) => {
      return <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />;
    });
    return <section className="tourlist">{tourslist}</section>;
  }
}
