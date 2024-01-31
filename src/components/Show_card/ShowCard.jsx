import React from 'react'
import './ShowCard.css';
import { Link } from 'react-router-dom';
import movieIcon from '../../assets/movie-clapper-open.svg';

function ShowCard( {name, id, genres, rating, network, status, image} ) {
  const poster = (image !== null) ? image.medium :  movieIcon
  return (
    <div className='card'>
        <div className="card--img">
            <img src={poster}/>
        </div>
        <Link to={`${id}`} style={{textDecoration: 'none'}}>
            <div className="card--details">
                <h2 className='show--name'>{name}</h2>
                <span className='genre'>{genres.join(", ")}</span>
                <h3 className='network'>{network?.name}</h3>
                <h4>{status}</h4>
                <p className='rating'>{rating?.average}</p>
            </div>
        </Link>
    </div>
  )
}

export default ShowCard