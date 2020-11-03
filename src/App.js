import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Project1 from "./components/pages/Project1";
import Project2 from "./components/pages/Project2";
import Project3 from "./components/pages/Project3";
import Project4 from "./components/pages/Project4";
import Project5 from "./components/pages/Project5";
import Project6 from "./components/pages/Project6";
import pitchit from "./imgs/pitchit.png";
import center from "./imgs/center_top.jpg";
import employee from "./imgs/employee_app.png";
import readme from "./imgs/readme_app.png";
import team from "./imgs/team_app.png";

function App() {
  return (
    <body>
    {/* <!--NAVBAR--> */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="https://www.instagram.com/mandoosorio/?hl=en">Armando Osorio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#navbarSupportedContent">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#router">Main Apps</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cli">CLI Apps</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#collabs">Collaborations</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#navbarSupportedContent" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="https://pitchitadventures.herokuapp.com">PitchIT</a>
                <a className="dropdown-item" href="activity_htmls/rock_paper_scissors.html">Rock, Paper, Scissors</a>
                <a className="dropdown-item" href="activity_htmls/weather_app/index.html">Weather Dashboard</a>
                <a className="dropdown-item" href="activity_htmls/day_calendar/index.html">Day Calendar</a>
                <a className="dropdown-item" href="activity_htmls/quiz/index.html">Code Quiz</a>
                <a className="dropdown-item" href="https://nodejs-note-taker.herokuapp.com/">Node Server Note Taker</a>
                <a className="dropdown-item" href="https://mvc-style-burger-app.herokuapp.com">MVC Burger App</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="https://github.com/mandoosorio">GitHub Profile</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#navbarSupportedContent" tabindex="-1" aria-disabled="true">UCI Graduate</a>
            </li>
          </ul>
          {/* <!-- <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> --> */}
        </div>
    </nav>
    {/* <!--NAVBAR--> */}

    {/* <!--PROFILE PICTURE--> */}
    <img src={center} alt="Profile" style={{"width":"400px", "height":"300px", "border-radius":"8px"}} className="center"></img>
    {/* <!--PROFILE PICTURE-->

    <!--NEXT TO IMAGE HAVE A UTILITIES BAR WITH CALENDAR, DATE, ETC-->
      
    <!--3 COLUMNS--> */}

    <div className="container">
      <div className="col-sm-4 center-column links">
          <h2>Links</h2>
          <ul>
            <li><a className="dropdown-item" href="https://github.com/mandoosorio" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a className="dropdown-item" href="https://www.linkedin.com/in/mandoosorio/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li>Email: osoriomando2345@gmail.com</li>
            <li>Phone: 562-639-5862</li>
          </ul>
      </div>
    </div>


    <div className="container">
        <div className="row">
          <div className="col-sm-4 left-column">
              <h2>About</h2>
              <p>I graduated from the University of California, Irvine with a Bachelor's Degree in Film & Media. Throughout my five-year attendance, I became extremely involved in UCI's media and offices. As a content producer in the university's University Advancement division, I created content that was aimed directly to our donors. I continued to develop these skills and transitioned over to web development in search for a more personal and controlled form of content creation where I could use my videography knowledge and apply it to the web.</p>
          </div>
          <div className="col-sm-4 center-column">
              <h2>Overview</h2>
              {/* <!--Full stack tools and knowledge--> */}
              <p>Every image that you see on this page was shot by myself. Photography and videography have been a true passion for me due to how much control you have over an image or frame to focus and show whatever it is that you want to. As a full-stack developer, I will take these same inspirations and methods to create pieces of art and create something that others will be able to interact with.</p>
          </div>
          <div className="col-sm-4 right-column">
              <h2>Disciplines</h2>
              <p>Through my education and work experience, I've obtained high editorial skills as well as copywriting skills which I value to be extremely important in web developing. Proper grammar ties in with proper syntax which helps analyze code and indentify problems. Another important aspect of web development is the customer's experience and for this I pull from my business background--not just in customer service, but also from demoing new technology and providing detailed reviews of my experiences as well as my role in business operations.</p>
          </div>
        </div>
    </div>
    {/* <!--3 COLUMNS--> */}
    <br></br>
    <div id="router">
    <h3 id="cli-title">Main Applications</h3>
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/project1" component={Project1} />
        <Route exact path="/project2" component={Project2} />
        <Route exact path="/project3" component={Project3} />
        <Route exact path="/project4" component={Project4} />
        <Route exact path="/project5" component={Project5} />
        <Route exact path="/project6" component={Project6} />
      </div>
    </Router>
    </div>
    <br></br>
    {/* <!--ACTIVITIES will include a skeleton version of rock, paper, scissor as well as the password generator--> */}
    {/* <div className="container" id="activities">
      <div className="row row-cols-2">
        <div className="col top-left">
          <h4><a href="https://nodejs-note-taker.herokuapp.com" target="_blank" rel="noopener noreferrer">Node Server Note Taker</a></h4>
            <p className="basics">
              In this application, all the information is stored within node.js so we begin to have a functional server to save data and create changes. 
            </p>
            <img id="notes" className="basics" src={notes} alt="Note Taker App"></img>
        </div>
        <div className="col top-right">
          <h4><a href="activity_htmls/weather_app/index.html" target="_blank">Weather Dashboard</a></h4>
            <p className="basics">
              This API based application will pull data from another server and render the weather results and information, saving all data in local storage.
            </p>
            <img id="weather" className="basics" src={weather} alt="Weather Dashboard App"></img>
        </div>
        <div className="col bottom-left">
          <h4><a href="activity_htmls/day_calendar/index.html" target="_blank">Day Calendar</a></h4>
            <p className="basics">
              Through the use of moment.js, we will use time values to indicate passed time and color-code our time blocks accordingly. Local storage will save text.
            </p>
            <img id="schedule" className="basics" src={schedule} alt="Schedule App"></img>
        </div>
        <div className="col bottom-right">
          <h4><a href="https://mvc-style-burger-app.herokuapp.com" target="_blank" rel="noopener noreferrer">MVC Burger App</a></h4>
            <p className="basics">
              An app using MySQL, Node, Express, Handlebars and a homemade ORM. Following MVC design pattern; using Node and MySQL to query and route data, and Handlebars to generate HTML.
            </p>
            <img id="burger" className="basics" src={burger} alt="MVC Burger App"></img>
        </div>
      </div>
    </div> */}
    {/* <!--ACTIVITIES-->

    <!--CLI PROJECTS--> */}
    <div className="container" id="cli">
      <h3 id="cli-title">CLI Applications</h3>
      <div className="row row-cols-2">
        <div className="col top-left">
          <h4><a href="https://github.com/mandoosorio/readme_generator" target="_blank" rel="noopener noreferrer">README Generator</a></h4>
            <p className="basics">
              This CLI App will ask the user questions and utilize a pre-made template to create a README unique to the user.
            </p>
            <img id="readme" className="basics" src={readme} alt="README CLI App"></img>
        </div>
        <div className="col top-right">
          <h4><a href="https://github.com/mandoosorio/employee_tracker" target="_blank" rel="noopener noreferrer">Employee Tracker</a></h4>
            <p className="basics">
              In this node.js based application, the user will be able to keep track of their employees by submitting and searching data that will be stored and handled with mySQL.
            </p>
            <img id="emploi" className="basics" src={employee} alt="Employee CLI App"></img>
        </div>
        <div className="col bottom-left">
          <h4><a href="https://github.com/mandoosorio/team_builder" target="_blank" rel="noopener noreferrer">Team Builder</a></h4>
            <p className="basics">
              The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. Once all information is inputed, an html file will be created with pre-made templates.
            </p>
            <img id="builder" className="basics" src={team} alt="Team Builder CLI App"></img>
        </div>
      </div>
    </div>
    {/* <!--CLI-->

    <!--COLLABORATIONS #collabs 'recipe app' 'national park app'--> */}

    <div className="container" id="collabs">
      <h3 id="cli-title">Collaborations</h3>
      <div className="row row-cols-2">
        <div className="col top-left">
          <h4><a href="https://pitchitadventures.herokuapp.com" target="_blank" rel="noopener noreferrer">PitchIT</a></h4>
            <p className="basics">
              In this National Parks app, the user can search national parks around the country and plan their trip, inviting friends and writing reviews about their adventure.
            </p>
            <img id="pitchit" className="basics" src={pitchit} alt="PitchIT App"></img>
        </div>
        {/* <!-- <div className="col top-right">
          <h4><a href="https://github.com/mandoosorio/employee_tracker" target="_blank">Employee Tracker</a></h4>
            <p className="basics">
              In this node.js based application, the user will be able to keep track of their employees by submitting and searching data that will be stored and handled with mySQL.
            </p>
            <img id="emploi" className="basics" src="imgs/employee_app.png">
        </div> --> */}
        
      </div>
    </div>

    {/* <!--HIDDEN PAGE THAT NEEDS A PASSWORD TO ACCESS--> */}

    <br></br>
    {/* <!--FOOTER--> */}
    <footer></footer>
    {/* <!--FOOTER--> */}

    {/* <!--JAVASCRIPT--> */}
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    {/* <!--JAVASCRIPT--> */}
  </body>
  );
}

export default App;
