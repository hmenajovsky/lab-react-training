import React from 'react';

const IdCard = (props) =>  {    
  return (
    <div className="card">
      <div className ="image">
        <img src={props.picture} alt="" />
      </div>
      <div className="user">
        <p><span className="label">First name</span> : {props.firstName}</p>
        <p><span className="label">Last name</span> : {props.lastName}</p>
        <p><span className="label">Gender</span> : {props.gender}</p>
        <p><span className="label">Height</span> : {props.height}</p>
        <p><span className="label">Birth date</span>: {props.birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
