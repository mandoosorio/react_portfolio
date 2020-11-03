import React from "react";
import burger from "../../imgs/burger_app.png";

function Project4() {
  return (
    <div className="relative">
      <h1><a className="atwo" href="https://mvc-style-burger-app.herokuapp.com" target="_blank" rel="noopener noreferrer">MVC Burger App</a></h1>
      <div className="col allcards">
        <p className="cardbasics">
          With MySQL, Node, Express, Handlebars, a homemade ORM, and Following MVC design pattern we query and route data while generating HTML.
        </p>
        <div className="absolute">
        <img id="cards" className="basics" src={burger} alt="MVC Burger App"></img>
        </div>
      </div>
    </div>
  );
}

export default Project4;