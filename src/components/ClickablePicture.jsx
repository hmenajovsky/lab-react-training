import React,{useState} from 'react'

const ClickablePicture = ({img, imgClicked}) => {

    const [image, setImage] = useState(img);
    const [clicked, setClicked] = useState(0);
    
    const handleClick = () => {        
    setClicked( (prevClicked) => prevClicked + 1)
    if (clicked % 2 !== 0) setImage(imgClicked);
    if (clicked % 2 === 0) setImage(img);
    }



    return (
        <>
            <img src={image} alt="" onClick={() => handleClick()} />
        </>
    )
}

export default ClickablePicture
