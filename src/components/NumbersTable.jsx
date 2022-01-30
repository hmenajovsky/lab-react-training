import React from 'react';

const NumbersTable = (props) => {

    let numbers = [];

    for(let i=1; i++; i < props.limit) {
       numbers.push(i);
    }

  

    return (
        <div className="numbers-table">
          {numbers.map((number) => {
              const isEven = number % 2 === 0 ;
              return (
                  isEven && (<div className="number even" key={number}>
                      {number}
                 </div>) 
              );
          })}
        </div>
    )
}

export default NumbersTable
