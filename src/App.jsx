import './App.css'
import phrases from './Contain/phrases.json'
import UserLucky from './Components/UserLucky'
import {useState} from 'react'
import ChangeImage from './Components/ChangeImage'

function App() {

  const [ index, setIndex ] = useState(0);
  const [indexImg, setIndexImg] = useState(0);

const image = ['fondo1', 'fondo2', 'fondo3', 'fondo4'];

const getRandomContent = () => {
  const randomNumber = Math.floor(Math.random() * phrases.length);
  setIndex(randomNumber)

  const randomImage = Math.floor(Math.random() * image.length);
setIndexImg(randomImage)
}

document.body.style = `background-image: url('/img/${image[indexImg]}.jpg')`;



  return (
    <>
    <main>
      {/* <ChangeImage /> */}
      <UserLucky 
      data = {phrases[index]}
      button = {getRandomContent}
      />
    </main>
    </>
  )
}

export default App
