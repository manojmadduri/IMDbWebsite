import React from 'react'
// import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Flickity from 'react-flickity-component';
import { List } from './List'; // Import your movie data
import '../styles/title.css'
import imgPoster from '../assets/avatarPoster.jpg'
import image1 from '../assets/avatar-img-1.jpg'
import image2 from '../assets/avatar-img-2.jpg' 
import image3 from '../assets/avatar-img-3.jpg' 
import image4 from '../assets/avatar-img-4.jpg' 
import image5 from '../assets/avatar-img-5.jpg' 
import "../styles/flickity.css";
// import Carousel from '../re-carousel-master/package-lock.json'
// const Flickity = require('react-flickity-component');


const flickityOptions = {
    initialIndex: 1,
    autoPlay:true,
    wrapAround:true,
    contain:true,
    pageDots:false
}



function Title() {
    const { id } = useParams();

    // Find the movie details in the List data using the movie ID
    const movieDetails = List.find(List => List.id === parseInt(id, 10));
  
    if (!movieDetails) {
      // Handle the case where the movie with the given ID is not found
      return <div>Movie not found</div>;
    }
  return (
    <div className='title' >
        <div className='title1'>
            <div className='left-side'>
                <h1>{movieDetails.Title}</h1>
                <div className='content'>
                    <p className='year'>{movieDetails.Year}</p>
                    <p className='rated' >{movieDetails.Rated}</p>
                    <p className='duration' >{movieDetails.Runtime}</p>

                </div>
            </div>
            <div className='right-side'>
                <div className='rating-header'>
                    <p className='rating-title'>IMDb RATING</p>
                
                    <div className='rating-details'>
                        <p className='star'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg></p>
                        <div className='number-rating'>
                            <p className='real-rating'>{movieDetails.imdbRating}</p>
                            <p className='rating-for'  >/10</p>
                        </div>
                    </div>
                </div>
                <div className='your-rating'>
                    <p className='your-rating-title' >YOUR RATING</p>
                    <div className='rating-star'>
                        <p className='star-blue'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z" clip-rule="evenodd"></path></svg></p>
                        <p className='rate' >Rate</p>
                    </div>
                </div>
                <div className='pop'>
                    <div className='pop-header'>
                        <p className='pop-title' >POPULARITY</p>
                    </div>
                    <div className='pop-details'>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="1.9em" height="1.9em" class="ipc-icon ipc-icon--popularity-down sc-5f7fb5b4-4 hNmaod" viewBox="0 0 24 24" fill="#fb3c3c" role="presentation"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8 0-1.4.4-2.8 1-3.9L8.4 12c.4.4 1 .4 1.4 0l1.4-1.5 2.4 2.6-1.4 1.4c-.3.3-.1.9.4.9h4.3c.3 0 .5-.2.5-.5v-4.3c0-.4-.5-.7-.9-.3L15 11.6l-3.1-3.3c-.4-.4-1-.4-1.4 0L9.2 9.8 6.3 6.4C7.7 4.9 9.7 4 12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8z"></path></svg>
                        <p className='pop-no'>333</p>
                        <div className='pop-last' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--arrow-drop-down sc-5f7fb5b4-6 bDDxMZ" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path></svg>
                            <p>50</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className='image'>
            <div className='Poster'>
                <img src={movieDetails.Poster}/>
            </div>
            <div className='title-images'>
            <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
        <img className='img1' src={movieDetails.Images[0]}/>
        <img className='img1' src={movieDetails.Images[1]}/>
        <img className='img1' src={movieDetails.Images[2]}/>
        <img className='img1' src={movieDetails.Images[3]}/>
        <img className='img1' src={movieDetails.Images[4]}/>
        
    </Flickity>
            </div>
        </div>

        <div className='bottem-conetnt'>
            < div className='title-gener'>
                <p className='title-gener1'>{movieDetails.Genre[0]}</p>
                <p className='title-gener1'>{movieDetails.Genre[1]}</p>
                <p className='title-gener1'>{movieDetails.Genre[2]}</p>
                {/* <p className='title-gener1'>Adventure</p>
                <p className='title-gener1'>Fantasy</p> */}
            </div>
            <div className='plot-details'>
                <p className='plot' >{movieDetails.Plot}</p>
                <hr></hr>
            </div>
            <div className='director'>
                <ul>
                <li><strong>Director</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#4c7dbc' }}>{movieDetails.Director}</span>
                </li>

                    <hr></hr>
                    <li>
  <strong>Writers</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <span style={{ color: '#4c7dbc' }}>{movieDetails.Writer}</span>
</li>
<hr />
<li>
  <strong>Stars</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <span style={{ color: '#4c7dbc' }}>{movieDetails.Actors}</span>
</li>
<hr />

                </ul>
            </div>
                

        </div>
    </div>
)
}

export default Title