import React from 'react';
import './Dog.css';

const dog = (props) => {
  return(
    <div className="dogcard">
      <h3 className="dogheader">{props.name}</h3>
      <div className="dogpiccontainer">
        <img src={props.picture} alt={props.name} className="dogpic"/>
      </div>
      <button
      onClick = {props.clicked}>
        Delete this dog{props.id}
      </button>
    </div>
  )
}

export default dog;
