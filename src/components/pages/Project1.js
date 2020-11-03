import React from "react";
import notes from "../../imgs/note_taker.png";

function Project1() {
  return (
    <div className="relative">
      <h1><a className="atwo" href="https://nodejs-note-taker.herokuapp.com" target="_blank" rel="noopener noreferrer">Node Server Note Taker</a></h1>
      <div className="col allcards">
          <p className="cardbasics">
            In this application, all the information is stored within node.js so we begin to have a functional server to save data and create changes. 
          </p>
        <div className="absolute">
        <img id="cards" className="basics" src={notes} alt="Note Taker App"></img>
        </div>
      </div>
    </div>
  );
}

export default Project1;