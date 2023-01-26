import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'

const Poke = ({type}) => {
    const [pokemon, setpokemon] = useState()
  useEffect(() => {
    const url=`https://pokeapi.co/api/v2/pokemon/${type}/`
    axios.get(url)
      .then(res=>setpokemon(res.data))
      .catch(err=>console.log(err))
  }, [type])
  console.log(pokemon);
  return (
    <div className='app'>
         <h1>{pokemon?.species.name}</h1>
        <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
    </div>
  )
}

export default Poke