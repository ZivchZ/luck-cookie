import './App.css'
import phrases from './Contain/phrases.json'
import UserLucky from './Components/UserLucky'
import {useState} from 'react'

function App() {

  const [ index, setIndex ] = useState(0);
  const [indexImg, setIndexImg] = useState(0);

const imag = ['fondo1', 'fondo2', 'fondo3', 'fondo4'];

const setNumber = () => {
  const randomNumber = Math.floor(Math.random() * phrases.length);
  setIndex(randomNumber)
  const changeImage = Math.floor(Math.random() * imag.length);
  setIndexImg(changeImage)
}

document.body.style = `background-image: url('/img/${imag[indexImg]}.jpg')`;

  return (
    <>
      <UserLucky 
      data = {phrases[index]}
      dataNum = {setNumber}
      
      />
      <button onClick={setNumber} className="lucky-button">Ver otro</button>
    </>
  )
}

export default App
