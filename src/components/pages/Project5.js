import React from "react";
import budget from "../../imgs/budget.png";

function Project5() {
  return (
    <div className="relative">
      <h1><a className="atwo" href="https://online-offline-budgeteer.herokuapp.com/" target="_blank" rel="noopener noreferrer">Online-Offline Budget Tracker</a></h1>
      <div className="col allcards">
        <p className="cardbasics">
          In this PWA, the user will be able to use the application offline. Once application is back online, all data will be saved and updated.
        </p>
        <div className="absolute">
        <img id="cards" className="basics" src={budget} alt="Budget PWA"></img>
        </div>
      </div>
    </div>
  );
}

export default Project5;