import React from "react";
import directory from "../../imgs/directory.png";

function Project6() {
  return (
    <div className="relative">
      <h1><a className="atwo" href="https://mandoosorio.github.io/employee_directory/" target="_blank" rel="noopener noreferrer">Employee Directory</a></h1>
      <div className="col allcards">
          <p className="cardbasics">
            Users are able to input information and view all employees and filter by name. The app uses react to render components and local storage for individual data.
          </p>
        <div className="absolute">
        <img id="cards" className="basics" src={directory} alt="React Directory"></img>
        </div> 
      </div>
    </div>
  );
}

export default Project6;