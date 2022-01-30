import React from 'react'
import dice0 from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import {useState} from 'react';

const Dice = () => {

    const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

    let random = dices[Math.floor(Math.random()* dices.length)];    
    
    const [dice, setDice] = useState(random);

    const changeImage = () => {
        setDice(dice0);
        setTimeout( () => setDice(random), 1000);
    }

    return (
        <div>
            <img src={dice} width= "15%" onClick={() => changeImage()} alt="dice"/>
        </div>
    )
}

export default Dice
