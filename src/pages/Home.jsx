import React from 'react'


import request from '../Request'
import Hero from '../Component/Hero'
import Row from '../Component/Row'

const Home = () => {
  return (
    <div>
      <Hero />
      <Row RowId='1' title='Up Coming' fetchURL={request.requestUpcoming} />
      <Row RowId='2' title='Popular' fetchURL={request.requestPopular} />
      <Row RowId='3' title='Trending' fetchURL={request.requestTrending} />
      <Row RowId='4' title='Top Rated' fetchURL={request.requestTopRated} />
      <Row RowId='5' title='Horror' fetchURL={request.requestHorror} />
    </div>
  )
}

export default Home