import React from 'react';
import './Dog.css';

const dog = (props) => {
  return(
    <div className="dogcard">
      <h3 className="dogheader">{props.name}</h3>
      <div className="dogpiccontainer">
        <img src={props.picture} alt={props.name} className="dogpic"/>
      </div>
    </div>
  )
}

export default dog;
