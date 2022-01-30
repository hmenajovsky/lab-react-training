import React from 'react';

const DriverCard = (props) => {

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
           if (Math.floor(props.rating) === i) html = stars[i];
        }

    const {name, img, car} = props;
    return (
        <div className= "driver-card">
            <div>
                <img src={img} alt={name}/>
            </div>
            <div>
                <p>{name}</p>   
                <p>{html}</p>             
                <p>{car.model} - {car.licensePlate}</p>
            </div>            
        </div>
    )
}

export default DriverCard
