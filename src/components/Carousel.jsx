import React, {useState} from 'react';

const Carousel = ({images}) => {
   
    const [image, setImage] = useState(images[0]);

    const prevImage = (i) => {
        if (i > 0) setImage(images[i - 1]);
        else setImage(images[images.length -1]);        
    };

    const nextImage = (i) => {
        if (i< images.length -1) setImage(images[i + 1])
        else setImage(images[0]) ;
    };


    return (
        <>
            <button onClick={ () => prevImage(images.indexOf(image)) }>Left</button>
              <img src= {image} alt = "random user"/>
            <button onClick={ () => nextImage(images.indexOf(image)) }>Right</button>
            
        </>
    )
}

export default Carousel
