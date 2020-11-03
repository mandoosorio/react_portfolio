import React from "react";
import notes from "../../imgs/note_taker.png";

function Project1() {
  return (
    <div>
      <h1>Project2</h1>
      <div className="col top-left">
        <h4><a href="https://nodejs-note-taker.herokuapp.com" target="_blank" rel="noopener noreferrer">Node Server Note Taker</a></h4>
          <p className="basics">
            In this application, all the information is stored within node.js so we begin to have a functional server to save data and create changes. 
          </p>
        <img id="notes" className="basics" src={notes} alt="Note Taker App"></img>
      </div>
    </div>
  );
}

export default Project1;