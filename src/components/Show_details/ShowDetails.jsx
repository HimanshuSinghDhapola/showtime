import React from 'react'
import './style.css';
import useFetchData from '../../hooks/fetch-data';
import { useParams, Link } from 'react-router-dom';
import ReactHtmlParser from 'html-react-parser';
import Button from '@mui/material/Button';
import poster from '../../assets/movie-clapper-open.svg';
import Loading from '../loading/Loading';

function ShowDetails() {

  const {id} = useParams();
  const {data, loading} = useFetchData(`https://api.tvmaze.com/shows/${id}`)

  if(loading){
    return (<Loading/>)
  }
  else{

    const backgroundImg = (data?.image !== null) ? data.image.original : poster;
    let genresArr = data?.genres;
    
    return (
    
    <section style={{backgroundImage: `url(${backgroundImg})`}}>
        <div className='show'>
            <div className='show--img'>
                <img src={backgroundImg}/>
            </div>
            <div className='show--details'>
                <h2 className='name'>{data?.name}</h2>
                <span className='sub'>{genresArr.join(", ")}   <span className='runtime'>{data?.averageRuntime} min</span></span>
                <span className='sub'>Years active: {data?.premiered} to {(data?.ended)?Date.ended:'Currently Airing'}</span>
                <h3 className='name'>Summary</h3>
                <span className='plot'>{ReactHtmlParser(data?.summary)}</span>
                <Button className='btn' variant="outlined" size="large">
                  <Link to={`/${data?.id}/form`} style={{textDecoration: 'none', color: 'white'}}>Book a ticket</Link>
                </Button>
            </div>
        </div>
    </section>
    )
  }
  
}

export default ShowDetails