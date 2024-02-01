import React from 'react'
import './ShowCard.css';
import { Link } from 'react-router-dom';
import movieIcon from '../../assets/movie-clapper-open.svg';

function ShowCard( {name, id, genres, rating, network, status, image} ) {
  const poster = (image !== null) ? image.medium :  movieIcon
  return (
    <Link to={`${id}`} style={{textDecoration: 'none'}}>
      <div className='card'>
        <div className="card--img">
            <img src={poster}/>
        </div>
        <div className="card--details">
            <h2 className='show--name'>{name}</h2>
            <span className='genre'>{genres.join(", ")}</span>
            <h3 className='network'>{network?.name}</h3>
            <h4 className='status'>{status}</h4>
            <p className='rating'>{rating?.average}</p>
        </div>
      </div>
    </Link>
  )
}

export default ShowCard