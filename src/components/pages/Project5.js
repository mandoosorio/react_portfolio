import React from "react";
import budget from "../../imgs/budget.png";

function Project5() {
  return (
    <div>
      <h1>Project5</h1>
      <div className="col top-left">
        <h4><a href="https://mvc-style-burger-app.herokuapp.com" target="_blank" rel="noopener noreferrer">Online-Offline Budget Tracker</a></h4>
        <p className="basics">
          An app using MySQL, Node, Express, Handlebars and a homemade ORM. Following MVC design pattern; using Node and MySQL to query and route data, and Handlebars to generate HTML.
        </p>
        <img id="burger" className="basics" src={budget} alt="MVC Burger App"></img>
      </div>
    </div>
  );
}

export default Project5;