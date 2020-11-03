import React from "react";
import weather from "../../imgs/weather_dashboard.png";

function Project2() {
  return (
    <div className="relative">
      <h1><a className="atwo" href="activity_htmls/weather_app/index.html" target="_blank">Weather Dashboard</a></h1>
      <div className="col allcards">
        <p className="cardbasics">
          This API based application will pull data from another server and render the weather results and information, saving all data in local storage.
        </p>
        <div className="absolute">
        <img id="cards" className="basics" src={weather} alt="Weather Dashboard App"></img>
        </div>
      </div>
    </div>
  );
}

export default Project2;