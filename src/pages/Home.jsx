import React from 'react'
import Hero from '../component/Hero'
import Row from '../component/Row'
import request from '../Request'

const Home = () => {
  return (
    <div >
        <Hero />
        <Row title='Up Coming' fetchURL={request.requestUpcoming} /> 
        <Row title='Popular' fetchURL={request.requestPopular} /> 
        <Row title='Trending' fetchURL={request.requestTrending} /> 
        <Row title='Top Rated' fetchURL={request.requestTopRated} /> 
        <Row title='Horror' fetchURL={request.requestHorror} /> 
    </div>
  )
}

export default Home