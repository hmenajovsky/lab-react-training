import React, { useState } from 'react';

//use a variable outside the function scope if not using a state
//let currentColor = "";
const colors = ['purple','blue','green','yellow','orange','red'];

const LikeButton = () => {

    const [likes, setLikes] = useState(0);
    const [color, setColor] = useState('');

    const style = {
        backgroundColor: color
    }

    const handleClick = () => {
        setLikes((prevLikes) => prevLikes + 1)
        setColor(colors[Math.floor(Math.random()*colors.length)]);
    }

    return (
        <div>
        <button onClick={() => handleClick()} style= {style}>{likes} Likes</button>            
        </div>
    )
}

export default LikeButton
