import React from "react";
import burger from "../../imgs/burger_app.png";

function Project4() {
  return (
    <div>
      <h1>Project4</h1>
      <div className="col top-left">
        <h4><a href="https://mvc-style-burger-app.herokuapp.com" target="_blank" rel="noopener noreferrer">MVC Burger App</a></h4>
        <p className="basics">
          An app using MySQL, Node, Express, Handlebars and a homemade ORM. Following MVC design pattern; using Node and MySQL to query and route data, and Handlebars to generate HTML.
        </p>
        <img id="burger" className="basics" src={burger} alt="MVC Burger App"></img>
      </div>
    </div>
  );
}

export default Project4;