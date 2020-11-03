import React from "react";
import weather from "../../imgs/weather_dashboard.png";

function Project2() {
  return (
    <div>
      <h1>Project2</h1>
      <div className="col top-left">
        <h4><a href="activity_htmls/weather_app/index.html" target="_blank">Weather Dashboard</a></h4>
        <p className="basics">
          This API based application will pull data from another server and render the weather results and information, saving all data in local storage.
        </p>
        <img id="weather" className="basics" src={weather} alt="Weather Dashboard App"></img>
      </div>
    </div>
  );
}

export default Project2;