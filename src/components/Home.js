import React from 'react'
import '../styles/Home.css'
import image1 from '../assets/avatarPoster.jpg'
import {List} from './List'
import { useNavigate } from 'react-router-dom'

function Home() {

const navigate = useNavigate()


function showMovie(id){
  navigate(`/title/${id}`)
  
}
return (
<div className='home'>
  <div className='grid-container'>

    {List.map((list, i) => {
      return(
        <div key={list.id} // Ensure you have a unique key for each grid item
        id={'grid' + (i + 1)}
        className='home-grid'
        onClick={() => showMovie(list.id)}> 
          <img className='poster-img' src={list["Poster"]} alt={list["Title"]} />
              <p>{list["Title"]}</p>
      </div>
      )
    })}

  </div>

</div>
  )
}

export default Home