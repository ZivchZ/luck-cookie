import { useState } from "react"

const ChangeImage = () => {

    const [index, setIndex] = useState(0)
    const [indexImg, setIndexImg] = useState(0);

    const imag = ['fondo1', 'fondo2', 'fondo3', 'fondo4'];

    const changeBackground = () => {
        Math.floor(Math.random() * imag.length);
        setIndexImg(changeBackground)
    }

        document.body.style = `background-image: url('/img/${imag[indexImg]}.jpg')`;

    return(
        <>
        
        </>
    )
}

export default ChangeImage