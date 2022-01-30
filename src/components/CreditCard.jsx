import React from 'react';

const CreditCard = props => {
  const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color
  };
  return (
    <div className="credit-card" style={divStyle}>
      <p>{props.type}</p>
      <p>{props.number}</p>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear}{' '}
        <span>{props.bank}</span>
      </p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
