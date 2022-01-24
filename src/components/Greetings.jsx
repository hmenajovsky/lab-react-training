import React from 'react'

const Greetings = props => {
    //if props.lang is de -> display Hallo 
    const word =  {
        de: "Hallo",
        fr: "Bonjour"
    }

    return (
        <div className="card">
            <p> {word[props.lang]} {props.children}</p>
            
        </div>
    )
}

export default Greetings
