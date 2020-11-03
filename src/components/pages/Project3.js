import React from "react";
import schedule from "../../imgs/schedule.png";

function Project3() {
  return (
    <div>
      <h1>Project3</h1>
      <div className="col top-left">
        <h4><a href="activity_htmls/day_calendar/index.html" target="_blank">Day Calendar</a></h4>
        <p className="basics">
          Through the use of moment.js, we will use time values to indicate passed time and color-code our time blocks accordingly. Local storage will save text.
        </p>
        <img id="schedule" className="basics" src={schedule} alt="Schedule App"></img>
      </div>
    </div>
  );
}

export default Project3;