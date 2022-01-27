import React from 'react'

const Rating = (props) => {
    /*const stars = {
        none : "☆; ☆; ☆; ☆; ☆;",
        one: "★ ☆; ☆; ☆; ☆; ",
        two: "★ ★ ☆; ☆; ☆; ",
        three: "★ ★ ★ ☆; ☆; ",
        four: "★ ★ ★ ★ ☆;",
        five: "★ ★ ★ ★ ★"
    };*/

    const stars = [
    "☆ ☆ ☆ ☆ ☆",
     "★ ☆ ☆ ☆ ☆ ",
    "★ ★ ☆ ☆ ☆ ",
    "★ ★ ★ ☆ ☆ ",
    "★ ★ ★ ★ ☆",
    "★ ★ ★ ★ ★"
    ];
    let html = "";
    

    for(let i =0; i < 6; i++) {
       if (Math.floor(props.children) === i) html = stars[i];
    }

    return (
  
        <div>
           {html}
        </div>
    )
}

export default Rating
