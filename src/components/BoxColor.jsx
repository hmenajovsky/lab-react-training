import React from 'react'

const BoxColor = (props) => {
 
    const divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        textAlign: "center",
        fontWeight: "100",
        fontSize: "1.5em",
        color: "#FFF"
      };
    return (
        <div 
        className="card rectangle"
        style={divStyle}
        >
         <p>{`rgb(${props.r},${props.g},${props.b})`}</p>   
        </div>
    )
}

export default BoxColor
