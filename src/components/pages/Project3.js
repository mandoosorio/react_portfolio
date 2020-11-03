import React from "react";
import schedule from "../../imgs/schedule.png";

function Project3() {
  return (
    <div className="relative">
      <h1><a className="atwo" href="activity_htmls/day_calendar/index.html" target="_blank">Day Calendar</a></h1>
      <div className="col allcards">
        <p className="cardbasics">
          Using moment.js, we will use time values to indicate passed time and color-code our time blocks accordingly. Local storage will save text.
        </p>
        <div className="absolute">
        <img id="cards" className="basics" src={schedule} alt="Schedule App"></img>
        </div>
      </div>
    </div>
  );
}

export default Project3;