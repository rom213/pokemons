import { useState } from 'react'
import './App.css'
import Poke from './Componets/Poke'

function App() {
   const [poke, setpoke] = useState(1)

    
   const handelsumit=e=>{
    e.preventDefault()
    setpoke(e.target.namepoke.value)
    console.log(dato);
   }
  return (
    <div className="App">
      <form onSubmit={handelsumit}>
        <input id='namepoke' type="text" />
        <button>SEARCH</button>
      </form>
      <div className='s'>
      <Poke type={poke}/>
        <Poke type={200}/>
        <Poke type={500}/>
      </div>
      <div className='s'>
      <Poke type={30}/>
        <Poke type={230}/>
        <Poke type={100}/>
      </div>

    </div>
  )
}

export default App
