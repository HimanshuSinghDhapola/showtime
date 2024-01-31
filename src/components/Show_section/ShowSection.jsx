import React, { useEffect, useState } from 'react';
import ShowCard from '../Show_card/ShowCard';
import useFetchData from '../../hooks/fetch-data';
import './style.css';
import Navbar from '../navbar/Navbar';
import Loading from '../loading/Loading';
import backgroundImg from '../../assets/background.png';

function ShowSection() {

  const {data, loading, } = useFetchData('https://api.tvmaze.com/search/shows?q=all');

  if(loading){
    return (<Loading/>)
  }
  else{
    return (
      <div className='show--section' style={{backgroundImage: `url(${backgroundImg})`}}>
        <Navbar/>
        <div className='display'>
            {data.map(({show}) => <ShowCard {...show}/>)}
        </div>
      </div>
    )
  }

}

export default ShowSection